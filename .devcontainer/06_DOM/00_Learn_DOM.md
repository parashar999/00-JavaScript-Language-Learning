## DOM OF BROWSER WINDOW DIAGRAM

window
│
├── document
│   ├── html
│   │   ├── head
│   │   │   ├── title
│   │   │   └── meta
│   │   └── body
│   │       ├── header
│   │       ├── main
│   │       │   ├── section
│   │       │   │   ├── h1
│   │       │   │   ├── p
│   │       │   │   └── a
│   │       │   └── article
│   │       │       ├── h2
│   │       │       └── p
│   │       └── footer
│   ├── getElementById()
│   ├── createElement()
│   └── querySelector()
│
├── location
│   ├── href
│   ├── hostname
│   ├── pathname
│   └── search
│
├── history
│   ├── back()
│   ├── forward()
│   └── go()
│
├── navigator
│   ├── userAgent
│   ├── language
│   ├── online
│   └── geolocation
│
├── screen
│   ├── width
│   ├── height
│   ├── availWidth
│   └── availHeight
│
├── console
│   ├── log()
│   ├── warn()
│   └── error()
│
├── localStorage
│   ├── setItem()
│   ├── getItem()
│   └── removeItem()
│
├── sessionStorage
│   ├── setItem()
│   ├── getItem()
│   └── removeItem()
│
├── setTimeout()
├── setInterval()
├── clearTimeout()
├── clearInterval()
│
├── alert()
├── confirm()
├── prompt()
│
├── fetch()
│
└── Event Handling
    ├── addEventListener()
    └── removeEventListener()


# JS Engine Diagram

JavaScript Engine
│
├── Memory Heap
│
├── Call Stack
│
├── Execution Context
│   ├── Variable Environment
│   ├── Scope Chain
│   └── "this" Binding
│
├── Interpreter
│   └── Parser
│       ├── Tokenizer/Lexical Analyzer
│       └── Abstract Syntax Tree (AST)
│
├── Just-In-Time (JIT) Compiler
│   ├── Interpreter
│   ├── Profiler
│   ├── Optimizing Compiler
│   └── Deoptimizer
│
├── Garbage Collector
│
└── Event Loop
    ├── Message Queue (Callback Queue)
    └── Microtask Queue
        └── Promises

Browser Environment
│
├── Web APIs
│   ├── DOM
│   ├── Fetch API
│   ├── Timers (setTimeout, setInterval)
│   └── Console (console.log, console.warn, etc.)
│
└── Event Loop
    ├── Message Queue (Callback Queue)
    └── Microtask Queue
        └── Promises



## DOM MANIPULATION IN CONSOLE

![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)
