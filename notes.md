# CS 260 Notes

This file represents what I have learned about web programming.
I love web programming.

- [My startup](https://startup.metronomemaker.click)
- [My simon](https://simon.metronomemaker.click)

My command to deploy to startup:

./deployReact.sh -k ~/keys_to_the_universe/clara_pemkey.pem -h metronomemaker.click -s startup

To simon:

./deployReact.sh -k ~/keys_to_the_universe/clara_pemkey.pem -h metronomemaker.click -s simon

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

MY REACT STEPS:
1. I have configured Vite and committed
2. I have reoganized my project
3. I have done the Bootstrap thing
4. I enabled React
5. I created the App component
6. I have made my placeholder view components
7. I did navigation
8. It took me a hot minute to fix the css but it works!
9. DONE!

## JS

Using objects, I can make an array of these objects containing key value pairs of the information of my users. Probably better though is to make a class for all of my users, each one as an instance of the class. 

- document.getElementById('likeButton') asks the browser to find the page element with that id (Because in DOM everything in the page is a JS object). What you get back is itself an object, one that represents the button.
- display.textContent = ... sets a property on that element object. Changing the property changes the text on screen.
- button.addEventListener('click', function () {...}) is a method call. This one says “when this button is clicked, run this function.” The function has no name here; it’s called an anonymous function, and you pass it in as an argument.

(I put this here as a reminder so I don't get confused by the acronyms)
DOM stands for Document Object Model.

Document: the web page (the HTML).
Object: the browser turns every piece of the page (each button, paragraph, image) into a JavaScript object.
Model: it’s a representation of the page that your code can work with.

The browser reads your HTML and builds a tree of objects, with <html> at the top and elements nested inside it. When you call document.getElementById(...), you’re searching that tree. Changing an object’s properties changes what appears on screen.

JSON stands for JavaScript Object Notation. It’s a plain-text format for writing data, modeled on how JavaScript writes objects. Because it’s just text, it can travel across the internet between a server and your app. One difference from a JavaScript object: in JSON, keys must be wrapped in double quotes.

Here is an example of an array holding objects:

const posts = [
  { title: 'First post', likes: 3 },
  { title: 'Second post', likes: 7 }
];

posts[1].title  // 'Second post'

(I'm adding this so I can remember for loops in Java haha)
The classic for loop

for (let i = 0; i < posts.length; i++) {
  console.log(posts[i].title);
}

The parentheses hold three parts separated by semicolons:

let i = 0: runs once at the start; creates a counter.
i < posts.length: checked before each round; the loop continues while this is true.
i++: runs after each round; adds 1 to the counter (the same ++ from your textbook example).
Because i is funcioning as the index, it is not a <= posts.length because the length is one higher than the highest index

- You log a parameter by using the $ mark and curly braces within the `` string marks
function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

This is how I can display a variable, in this case one from React.useState:

<div>
{currentusername}
</div>

## Service Notes

This is how we authenticate the login! Yay.

if I use an endpoint like: /foods1?limit=10, page=2 GET That can limit the number of things from the database I request, and specify which page (like this could be 11-20)

The service gets its own folder called service and that's the backend! The definitions of the endpoints are there. Using these endpoints, I can write code to connect to the database (that I don't have yet) to autheticate the users (check that they've actually made an account and the username and password match)

## Other Project Notes

Remember ../ is how you can go UP a directory when linking files.


> [!NOTE]
> This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
> If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

> [!NOTE]
> Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.