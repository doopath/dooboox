# Patchnotes

## patchnote 1.0.1

- Header-searcher fixes : toggle searcher mode was working but must not.

## patchnote 1.0.2

- Any reducers and state components rewrited to .ts format;
- Reducers were remade, not these look like class implementing reducer interface;
- Any main .js/.jsx components replaced to same but .ts or .tsx format;
- Added none-page image to authors (id: 1, 2, 3).

## patchnote 1.0.3

- Added tests for any reducers (menuR, rootR, searchR);
- Refactoring of reducers (same).

## patchnote 1.0.4

- Refactoring of page components (Page.tsx, HomePage.tsx);
- Page-searcher button and next/previous pagination button were fixed.

## patchnote 1.0.5

- Code-block items' font weight was fixed.

## patchnote 1.0.6

- Pagination and page-searcher buttons fixed;
- Replaced old logotype to new one.

## patchnote 1.0.7

- Manifest.json file was fixed - now it's working correctly;
- patchnote 1.0.7.05: header modules were fixed.

## patchnote 1.0.8

- Menu modules ( CompactMenu/FullsizeMenu and facade Menu.jsx ) replaced to same but .tsx format;
- Added a lifecycle method for HomePage module;
- Added a lifecycle method for ContentPage module;
- Added a logger module - now it can log an exception to a browser console.

## patchnote 1.0.9

- Authors page translated to server-located (remoted) type;
- About page translated to server-located type;
- Developer, Redactor and Writer pages translated to server-located type;
- Added a new logic block - AuthorBlockEngine;
- Added new properties of the initial state;
- Added new feautures to the page engine;
- Performance improvements and optimization - added react-keys for some items,
  removed minimap - it takes more resources than expected,
  optimization of the headerSearcher and pageSearcher;
- Refactoring of the PageEngine module - it was destructured to a few single files
  and classes implementing same Engine interface;
- Compact (mobile) menu curtain was fixed (it dont touch top side of 5 pixels);
- Pagination buttons style was fixed - page searcher moved to another line;
- Also added a new pages (AuthorsPage and anothers like this) to the api (see [dooboox_api](https://github.com/sha1om/dooboox_api)).
