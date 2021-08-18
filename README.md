# FastPres

Demo: https://devpost.com/software/fastpres

Hosted here: https://presfast.netlify.app/

There are two versions of FastPres:
* Python  Script
* Web

The Web version uses Django and React

**Used technologies:** *Python, Django, React, python-pptx*

## Description

FastPres creates .pptx presentations from text files. The python script allows you to include images as well.

## How to Use - Python Script

### Requirements
* Python

### Installation
Install the python dependencies found in `requirements.txt` in `python_local`. 

### Executing program
Create a text file and name it `text.txt`. Write your presentation content in the file (a file is included as an example).
```
python main.py
```

## How to Use - Web Version

### Requirements
* Django 
* Node

### Installation
Run `npm install` in the `client` folder.

Install the python dependencies found in `requirements.txt` in `python_server/pres_gen`. 

### Executing program
In `python_server/pres_gen`,
```
python manage.py runserver
```
In `client`,
```
npm start
```
Go to `http://localhost:3000` in browser

## License

This project is licensed under the MIT License - see the LICENSE.md file for details