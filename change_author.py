#!/usr/bin/env python3

import subprocess
import sys

# Define the old and new author information
old_name = "Anish X World"
old_email = "anishgaming2848@gmail.com"
new_name = "Himanshu"
new_email = "4253himanshu@github.com"

# Create a mailmap file for git-filter-repo
with open('mailmap.txt', 'w') as f:
    f.write(f"{new_name} <{new_email}> {old_name} <{old_email}>\n")

# Run git-filter-repo with the mailmap
try:
    subprocess.run(["git-filter-repo", "--mailmap", "mailmap.txt", "--force"], check=True)
    print("Successfully changed author information for all commits.")
except subprocess.CalledProcessError as e:
    print(f"Error: {e}")
    sys.exit(1)
