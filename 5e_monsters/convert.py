import re
import json
from bs4 import BeautifulSoup

book_regex = re.compile('(?<=-).*')

def doc_shorthand(document_name):
    if document_name == 'Tome of Beasts 2023':
        return 'tob2023'
    elif document_name == 'Tome of Beasts 2':
        return 'tob2'
    elif document_name == 'Tome of Beasts 3':
        return 'tob3'
    elif document_name == 'A5e Monstrous Menagerie':
        return 'a5emm'
    elif document_name == 'Creature Codex':
        return 'cc'
    elif document_name == 'Black Flag':
        return 'bf'
    else:
        ValueError

def decode_ascii(str):
    if not str.isascii():
        return str.replace('\n', '\\n')
    return bytes(str, 'utf-8').decode('unicode_escape').replace('\n', '\\n')


def rewriteA5eSpellcasting(str):
    # Rewrite newlines for a5e content, kind of borked in the json
    return re.sub(r'(?<=[0-9a-zA-Z])\n(?=\s[a-zA-Z\+])', ',', str).replace('\n', '\\n')


def parse_abilities(md_file, ability_json, name, isA5emm=False):
    md_file.write(f'"{name}":\n')
    abilities = json.loads(ability_json)
    for ability in abilities:
        if ability['name'] == 'Spellcasting' and isA5emm:
            description = rewriteA5eSpellcasting(ability['desc'])
        else:
            description = decode_ascii(ability['description']) if 'description' in ability else decode_ascii(ability['desc'])
        md_file.write(f'- "desc": "{description}"\n')
        md_file.write(f'  "name": "{ability['name']}"\n')

def parse_cr(cr):
    if cr >= 1 or cr == 0:
        return str(int(cr))
    elif cr == 0.5:
        return '1/2'
    elif cr == 0.25:
        return '1/4'
    elif cr == 0.125:
        return '1/8'
    else:
        ValueError

def add_link(slug, url):
    with open(f'monsters_html/{slug}.html', "r", encoding='utf-8') as file:
        contents = file.read() 
    soup = BeautifulSoup(contents, 'html.parser')
    paragraph = soup.find_all('p')[-1]
    paragraph.append(' - ')
    link_tag = soup.new_tag(name='a', attrs=dict(href=url))
    link_tag.string = 'Obsidian statblock'
    paragraph.append(link_tag)
    with open(f'monsters_html/{slug}.html', "w", encoding='utf-8') as file:
        file.write(str(soup))
        
def generate_mdfile(monster):
    if monster['document__title'] == 'Black Flag':
        return
    name_doc = f'{monster["name"]}-{doc_shorthand(monster['document__title'])}'
    filename = f'obsidian_statblock/{re.sub(r' ','-', name_doc).lower()}.md'
    with open(filename, 'w', encoding="utf-8") as md_file:
        md_file.write('---\n')
        md_file.write('obsidianUIMode: preview\n')
        md_file.write('cssclasses: json5e-monster\n')
        md_file.write('tags:\n')
        md_file.write(f'- compendium/src/5e/{doc_shorthand(monster['document__title'])}\n')
        md_file.write(f'- monster/cr/{monster["challenge_rating"]}\n')
        md_file.write(f"- monster/size/{monster['size']}\n")
        md_file.write(f"- monster/type/{monster['type']}\n")
        md_file.write('statblock: inline\n')
        md_file.write(f'aliases: ["{monster['slug']}", "{name_doc}"]\n')
        md_file.write('---\n')
        md_file.write(f"# {name_doc.replace('-',' ').title()}\n")
        md_file.write(f'*Source: {monster['document__title']} Page {monster['page_no']}*\n')
        md_file.write('\n')
        md_file.write('```statblock\n')
        md_file.write(f'"dice": false\n')
        md_file.write(f'"name": "{name_doc.replace('-',' ').title()}"\n')
        md_file.write(f'"size": "{monster['size']}"\n')
        md_file.write(f'"type": "{monster['type']}"\n')
        md_file.write(f'"ac": !!int "{monster['armor_class']}"\n')
        md_file.write(f'"ac_class": "{monster['armor_desc']}"\n')
        md_file.write(f'"hp": !!int "{monster['hit_points']}"\n')
        md_file.write(f'"hit_dice": "{monster['hit_dice']}"\n')
        md_file.write(f'"stats":\n')
        # stats in order: str, dex, con, int, wis, cha
        md_file.write(f'- !!int "{monster['strength']}"\n')
        md_file.write(f'- !!int "{monster['dexterity']}"\n')
        md_file.write(f'- !!int "{monster['constitution']}"\n')
        md_file.write(f'- !!int "{monster['intelligence']}"\n')
        md_file.write(f'- !!int "{monster['wisdom']}"\n')
        md_file.write(f'- !!int "{monster['charisma']}"\n')

        speed = json.loads(monster['speed_json'])
        md_file.write(f'"speed": "{' '.join(list(map(lambda x: f'{x} {speed[x]} ft.', speed)))}"\n')

        if monster["strength_save"] or monster["strength_save"] or monster["strength_save"] or monster["strength_save"] or monster["strength_save"] or monster["strength_save"]:
            md_file.write('"saves":\n')
            if monster['strength_save']:
                md_file.write(f'  "Strength": !!int "{monster["strength_save"]}"\n')
            if monster['dexterity_save']:
                md_file.write(f'  "Dexterity": !!int "{monster["dexterity_save"]}"\n')
            if monster['constitution_save']:
                md_file.write(f'  "Constitution": !!int "{monster["constitution_save"]}"\n')
            if monster['intelligence_save']:
                md_file.write(f'  "Intelligence": !!int "{monster["intelligence_save"]}"\n')
            if monster['wisdom_save']:
                md_file.write(f'  "Wisdom": !!int "{monster["wisdom_save"]}"\n')
            if monster['charisma_save']:
                md_file.write(f'  "Charisma": !!int "{monster["charisma_save"]}"\n')
        if monster["senses"]:
            md_file.write(f'"senses": {monster["senses"]}\n')
        if monster["skills_json"]:
            md_file.write('"skillsaves":\n')
            skills = json.loads(monster['skills_json'])
            for skill in skills.keys():
                md_file.write(f'  "{skill}": !!int "{skills[skill]}"\n')
        if monster["languages"]:
            md_file.write(f'"languages": "{decode_ascii(monster['languages'])}"\n')
        md_file.write(f'"cr": "{parse_cr(monster['cr'])}"\n')
        if monster['damage_immunities']:
            md_file.write(f'"damage_immunities": "{monster['damage_immunities']}"\n')
        if monster['damage_resistances']:
            md_file.write(f'"damage_resistances": "{monster['damage_resistances']}"\n')
        if monster['special_abilities_json'] and monster['special_abilities_json'] != 'null':
            parse_abilities(md_file, monster['special_abilities_json'], 'traits', monster['document__title'] == 'A5e Monstrous Menagerie')
        if monster['actions_json'] and monster['actions_json'] != 'null':
            parse_abilities(md_file, monster['actions_json'], 'actions')
        if monster['reactions_json'] and monster['reactions_json'] != 'null':
            parse_abilities(md_file, monster['reactions_json'], 'reactions')
        if monster['bonus_actions_json'] and monster['bonus_actions_json'] != 'null':
            parse_abilities(md_file, monster['bonus_actions_json'], 'bonus_actions')
        if monster['legendary_actions_json'] and monster['legendary_actions_json'] != 'null':
            parse_abilities(md_file, monster['legendary_actions_json'], 'legendary_actions')
        md_file.write('source:\n')
        md_file.write(f'- [{monster["document__title"]}]({monster["document__url"]})\n')
        md_file.write('```\n')
    # add_link(monster['slug'], f'../{filename}')

with open("monsters.json", 'r', encoding='utf-8',
                     errors='ignore') as f:
    monsters = json.load(f)
    print(f'Starting Monster statblock generation')
    for monster in monsters:
        generate_mdfile(monster)