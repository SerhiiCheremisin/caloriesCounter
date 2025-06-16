import json
import os

def load_users():
    try:
        with open('users.json', 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def save_users(users):
    with open('users.json', 'w') as file:
        json.dump(users, file, indent=2)    
        
def load_database():
    try:
        with open('user_database.json', 'r') as file:
             return json.load(file)
    except  FileNotFoundError:
        return [] 
 
def save_database(database):
    with open('user_database.json', 'w') as file:
         json.dump(database, file, indent=2 )            