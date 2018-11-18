# NoteIt

## How I went about it

1. **Design** - I made a design in Figma to fit the user stories acceptance criteria. [The design can be seen here](https://www.figma.com/file/GGepGKSb785ana2ETSn6tKjq/NoteIt?node-id=3%3A200).

   - I chose to make an design for mobile devices, as this is usually faster to design due to stricter limit of space to fill. It also seemed to fit the purpose of the app.
   - I did not use any UI-template as I generally feel they usually end up being more of a hinderance in the long run. I also wanted my own design.

2. **React** - I began to implement the basic structure of components for all parts (new note-button, search field, note-items etc).

   - In a larger project (several views and more complex component-structures) I would have rather used Atomic-design principles for structuring of components, but as this application didn't have that many components, I chose to just keep them in the same components-folder.
   - I used `create-react-app` as it has a lot of good default in its setup. If needed I could config webpack my self, but that would have taken additional time with little returned value.

3. **Redux/Thunk** - In order to handle logic in the client I implemented Redux (and thunk middleware for async actions).

   - In my experience naming often become a source of confusion, so I prefer to use long names that are super clear, than short ones that are dubious. Hence I name all actions and reducer-files with their type and all thunks are named `<FunctionName>thunk` to make it clear they are dispatching actions and are not the actions themselves.

4. **Persistance of data** - Lacking time for building a proper API in Node/Express I made a class `PretendAPI` using `localstorage`, imitating the behavior of an API. This allows for easier implementation of a future API. I thought about having it use Promises but it would add complexity that meant it would take more time and refute the purpose of having it to begin with.

5. **Testing** - I tried to cover as much as possible of the mostly important parts with tests, however most components have simple snapshots as they do little more than render. The major concern regarding testing is actions (thunks) as well as the PretendAPI.

## Additional improvements

- Currently the setting of categories is dumb and only stores category as a string. As shown in the design, the intention was to have a smarter component listing existing categories in a dropdown. The categories doesn't actually group the notes yet but can be easily changed by simply writing another category in the text-field.

- The content only handles a basic string without any formatting.

- Using a real API and persisting data via MongoDB (or other database). I would use a mono repository as the API could be hosted along with the client and deployed via Heroku.
