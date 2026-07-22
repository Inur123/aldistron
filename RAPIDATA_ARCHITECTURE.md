# RAPIDATA Architecture Specification (Custom Layered Facade-Repository)

Spesifikasi struktur direktori modular untuk Angular (Signals / RxJS) pada project **RAPIDATA Frontend** / **aldistron**.

---

## Visualisasi Struktur Folder (Directory Tree)

```text
src/app/features/[feature_name]/
├── models/                         <-- Tipe Data & Interface Murni (Pure Domain)
│   ├── [feature].model.ts          // [DOMAIN MODEL] Format data internal FE
│   └── [feature].dto.ts            // [DATA TRANSFER OBJECT] Raw response / request dari BE
│
├── services/                       <-- Layer Request HTTP ke Backend
│   ├── [feature].service.ts        // [SERVICE] HTTP client (GET, POST), Query Params, URL Endpoint
│   ├── api.service.ts              // [SERVICE] Generic HTTP client wrapper
│   └── index.ts                    // Export public API service
│
├── repositories/                   <-- Layer Data Transformation & Cache
│   ├── [feature].repository.ts     // [REPOSITORY] Business logic data, caching, orchestrate mapper
│   ├── [feature].mapper.ts         // [MAPPER] (Server Response <-> Angular Model FE)
│   ├── dtoToModel.mapper.ts        // [MAPPER] Transformasi DTO ke FE Model
│   ├── modelToDto.mapper.ts        // [MAPPER] Transformasi FE Model ke DTO
│   └── index.ts                    // Export public API repository
│
├── facades/                        <-- Layer Orchestrator & State Management
│   ├── [feature].facade.ts         // [FACADE] Hubungkan UI ke Repo, kelola State (Signal/RxJS)
│   ├── [feature].store.ts          // [STORE] State management store
│   └── index.ts                    // Export public API facade
│
├── component/                      <-- Component UI khusus module
├── metadata/                       <-- Inputan form JSON & konfigurasi metadata
│
├── ui/                             <-- Layer Tampilan & Interaksi User
│   └── [sub-feature-list]/
│       ├── [sub-feature].component.ts  // [COMPONENT] Logic interaksi (click, submit, event)
│       ├── [sub-feature].component.html// [VIEW] Template HTML
│       ├── [sub-feature].component.scss// [STYLE] Layouting & Styling SCSS
│       index.ts                // Export public API UI
│
└── [feature].routes.ts             <-- [ROUTING] Entry point routing modul feature
```

---

## Catatan Aturan Penting (Rules)

1. **Folder Mappers Dihapus & Dipindah**: Semua file mapper diletakkan **langsung di dalam folder `repositories/`** (tidak ada subfolder `mappers/`).
2. **Separation of Concerns (SoC)**:
   - **UI Component** hanya berkomunikasi melalui **Facade**.
   - **Facade** mengatur state dan mengambil data dari **Repository**.
   - **Repository** mengolah data backend (**Service**) dan mengubahnya menjadi model frontend menggunakan **Mapper**.
