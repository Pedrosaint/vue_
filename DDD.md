src/
│
├── app/                      # App-level setup (router, store, plugins)
│   ├── router/
│   ├── store/               # Pinia (recommended) or Vuex
│   └── providers/
│
├── shared/                  # Reusable across domains
│   ├── components/
│   ├── utils/
│   ├── constants/
│   ├── hooks/               # composables
│   └── types/
│
├── domains/                 # 🔥 Core DDD layer
│   ├── auth/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/           # Pinia store for auth
│   │   ├── api/        # API calls (Axios)
│   │   ├── models/          # types/interfaces
│   │   └── hooks/
│   │
│   ├── jobs/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── api/
│   │   ├── models/
│   │   └── hooks/
│   │
│   ├── dashboard/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── api/
│   │   └── hooks/
│
├── layouts/                 # App layouts (DashboardLayout, AuthLayout)
│
├── routes/                  # Route definitions (optional split from app/router)
│
├── assets/
│
└── main.ts
