import re

with open("src/app/guides/linkedin-outreach-templates-ai/page.tsx", "r") as f:
    content = f.read()

# Find all text between JSX tags (including multiline) and replace unescaped entities
# Pattern: > followed by text (no < inside), then <
# We use DOTALL to match across lines
def escape_jsx_entities(match):
    text = match.group(1)
    # Replace bare apostrophes and double quotes
    text = text.replace("'", "&apos;")
    text = text.replace('"', "&quot;")
    return '>' + text + '<'

# Match >...text...< where ... does not contain < or > 
# Use re.DOTALL to match across lines, but be careful not to match inside {...}
fixed = re.sub(r'>([^\u003c\u003e]{1,2000}?)<', escape_jsx_entities, content, flags=re.DOTALL)

with open("src/app/guides/linkedin-outreach-templates-ai/page.tsx", "w") as f:
    f.write(fixed)

print("Done")
