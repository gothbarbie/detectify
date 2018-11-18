# NoteIt

## How I went about it

1. I made a design in Figma to fit the user stories acceptance criteria. [The design can be seen here](https://www.figma.com/file/GGepGKSb785ana2ETSn6tKjq/NoteIt?node-id=3%3A200).

   - I chose to make an design for mobile devices, as this is usually faster to design due to stricter limit of space to fill. It also seemed to fit the purpose of the app.
   - I did not use any UI-template as I generally feel they usually end up being more of a hinderance in the long run. I also wanted my own design.

2. I began to implement the basic structure of components for all parts (new note-button, search field, note-items etc).

   - In a larger project (several views and more complex component-structures) I would have rather used Atomic-design principles for structuring of components, but as this application didn't have that many components, I chose to just keep them in the same components-folder.

3. In order to handle logic in the client I implemented Redux (and thunk middleware for async actions).

   - In my experience naming often become a source of confusion, so I prefer to use long names that are super clear, than short ones that are dubious. Hence I name all actions and reducer-files with their type and all thunks are named `<FunctionName>thunk` to make it clear they are dispatching actions and are not the actions themselves.

4. Lacking time for building a proper API in Node/Express I made a class `PretendAPI` using `localstorage`, imitating the behavior of an API. This allows for easier implementation of a future API. I thought about having it use Promises but it would add complexity that meant it would take more time and refute the purpose of having it to begin with.
