# CS 260 Notes

This file represents what I have learned about web programming.
I love web programming.

- [My startup](https://startup.cs260.click)
- [My simon](https://simon.cs260.click)

My command to deploy to startup:
./deployFiles.sh -k ~/keys_to_the_universe/clara_pemkey.pem -h metronomemaker.click -s startup

To simon:

./deployFiles.sh -k ~/keys_to_the_universe/clara_pemkey.pem -h metronomemaker.click -s simon

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

Interesting things I have learned about AWS
AWS is very confusing haha, but this is the command I can use to access my server
ssh -i ./keys_to_the_universe/clara_pemkey.pem ubuntu@44.219.172.115
And the elastic ip address: 44.219.172.115
I learned how to go in and change up settings all the time as well for my AWS server. I think I could use a VPN with a set IP address to limit ssh access to the server if I wanted to.

## HTML

Interesting things I have learned about HTML: There are many ways to do the same thing, and I'm kind of in charge! I figured out the difference between in-line and block HTML and figured out and reviewed the syntax for some tags I forgot.

## CSS

These are some notes from my class.
- Firstly, flex is useful and important. Use flexboxfroggy to learn more! There are a lot of cool commands I can use through flex to make my website design flexible and pretty.
- Bootstrap is millions of lines of free CSS that I can use after importing bootstrap. It makes things pretty for me.

## React

Interesting things I have learned about React in class: Node.js is just JavaScript with a fancy package around it that makes it function as a backend language. The event script attribute is the method sayGoodbye() in this line:
<button onclick="sayGoodbye()">Say Goodbye</button>

Node.JS is how you can run JavaScript outside the browser. It's so things like console.log don't go to the console in the browser, but into the terminal - to the backend. Node Package Manager (NPM) is what lets us share packages and code between various Node.JS programs. After I think it's installed, I should type node -v into my terminal to check if I have it.

## JS

Using objects, I can make an array of these objects containing key value pairs of the information of my users. Probably better though is to make a class for all of my users, each one as an instance of the class. 

## Other Project Notes

Remember ../ is how you can go UP a directory when linking files.


> [!NOTE]
> This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
> If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

> [!NOTE]
> Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.