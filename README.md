# Week 13: Fetching APIs

CEN 3352, Front-End Development and Design. Tuesday, Nov 10 (fetching) and Thursday, Nov 12 (search and filters).

Both days work on one component, `MatchList`. It loads every Premier League match of the 2025/26 season from the internet.

## Before class

1. Open `tuesday/starter` (Tuesday) or `thursday/starter` (Thursday) in VS Code with File > Open Folder
2. In the VS Code terminal, run `npm install`, then `npm run dev`
3. Open the address it prints (usually http://localhost:5173)
4. Open the browser console: right-click the page, Inspect, Console

## Folders

| Folder | What it holds |
|--------|---------------|
| `tuesday/starter` | The header only. We add `MatchList` one step at a time |
| `tuesday/steps` | Each step of Tuesday's lecture |
| `tuesday/final` | Tuesday's finished project (same as step 04) |
| `thursday/starter` | Tuesday's finished project with a new subtitle |
| `thursday/steps` | Each step of Thursday's lecture |
| `thursday/final` | Thursday's finished project (same as step 04) |

Each step folder is a complete `src` folder. To jump to a step, replace your project's `src` folder with a copy of the step folder, renamed to `src`.

## Tuesday steps

| Step | Idea |
|------|------|
| `01_then` | Week 12's `fetch().then()` code with a new address: the Premier League file |
| `02_async` | The same fetch with `async` and `await`; show the first 10 matches |
| `03_loading` | A loading message while we wait (`isLoading`) |
| `04_errors` | `try`/`catch`, a `response.ok` check, and a plain error message |

## Thursday steps

| Step | New component | Idea |
|------|---------------|------|
| `01_search` | | A search box in `MatchList` that filters by team name |
| `02_month` | | A month menu (`<select>`); both filters apply at once |
| `03_lift_search` | `SearchBox.jsx` | The search text moves up into `App`; `SearchBox` calls App's handler |
| `04_lift_month` | `MonthPicker.jsx` | The month moves up into `App` the same way |

## Trying the loading and error messages

- Loading: DevTools, Network tab, change No throttling to Slow 4G, then refresh
- No internet: DevTools, Network tab, change No throttling to Offline, then refresh
- Wrong address: in `MatchList.jsx`, change `"/en.1.json"` to `"/en.1.jsn"` and save

## Data

- openfootball, https://github.com/openfootball/football.json, a free public project. No account or key
- Premier League 2025/26: https://raw.githubusercontent.com/openfootball/football.json/master/2025-26/en.1.json (380 matches, checked Nov 3, 2026)
- Other leagues use the same folder, for example `en.2.json` (Championship) and `es.1.json` (Spain)
