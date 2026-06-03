import re

with open("src/app/guides/linkedin-outreach-templates-ai/page.tsx", "r") as f:
    content = f.read()

# Use a regex to find text between JSX tags and replace unescaped entities
# This is a pragmatic approach: find all text content between > and < or </
# and replace bare apostrophes and double quotes in that text

def escape_jsx_text(match):
    text = match.group(1)
    # Only escape if not already escaped
    text = text.replace("'", "&apos;")
    text = text.replace('"', "&quot;")
    return ">" + text + "<"

# Pattern: text between > and < that is not inside {...} or "..."
# We'll do a simpler approach: replace all bare apostrophes in the file
# that are NOT inside strings (quoted with " or ') and NOT inside JSX expressions

# Actually, let's just do a targeted approach: find all JSX text content 
# (between > and <) and escape entities there
fixed = re.sub(r'>([^<\n]{2,500})<', lambda m: '>' + m.group(1).replace("'", "&apos;").replace('"', "&quot;") + '<', content)

with open("src/app/guides/linkedin-outreach-templates-ai/page.tsx", "w") as f:
    f.write(fixed)

print("Done")
