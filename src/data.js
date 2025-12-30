export const ABOUT = {
  name: 'Mohammed Hijazi',
  role: 'Senior CS @ KFUPM',
  summary:
    'I build trusted metrics and clean dashboards. My focus is reliability, KPI governance, and decision-ready analysis.',
  bullets: [
    'Strong SQL + modeling fundamentals (grain, dims/facts, joins)',
    'Dashboard UX that is clear, scannable, and action-oriented',
    'Pipelines with tests, monitoring, and ownership',
  ],
}

export const WORKS = [
  {
    id: 'bi-kpi-hub',
    title: 'KPI Hub',
    tags: ['BI', 'Dashboards', 'Governance'],
    blurb: 'Executive KPIs with definitions, ownership, and consistent filters.',
    details: [
      'Star schema + clear grain to avoid mystery joins.',
      'KPI dictionary (definition, owner, logic, caveats) to prevent metric drift.',
      'Decision-first dashboards: hierarchy, context, and action prompts.',
    ],
    stack: ['SQL', 'Power BI / Tableau', 'dbt (optional)', 'Excel'],
  },
  {
    id: 'sales-forecast',
    title: 'Sales Forecast',
    tags: ['Time Series', 'Planning', 'Ops'],
    blurb: 'Forecasting pipeline with backtesting and segment diagnostics.',
    details: [
      'Rolling-origin backtests with MAE/MAPE by segment.',
      'Outlier + holiday handling for stability.',
      'Baseline-first: simple model + improved model with documented tradeoffs.',
    ],
    stack: ['Python', 'pandas', 'statsmodels / prophet', 'Jupyter'],
  },
  {
    id: 'data-quality',
    title: 'Data Quality Monitor',
    tags: ['Reliability', 'Alerts', 'Data Ops'],
    blurb: 'Freshness, null spikes, duplicates, and schema drift checks.',
    details: [
      'Rules-based checks + daily report.',
      'Distribution shift checks to catch silent breakage.',
      'Severity + owner + runbook per check.',
    ],
    stack: ['SQL', 'Python', 'Great Expectations (optional)'],
  },
  {
    id: 'mini-warehouse',
    title: 'Mini Data Warehouse',
    tags: ['ETL', 'Modeling', 'Documentation'],
    blurb: 'End-to-end ingestion + modeling + reporting dataset.',
    details: [
      'Incremental loads, deduping, late-arriving handling.',
      'Dim/fact modeling with tests.',
      'Versioned transformations and reproducible builds.',
    ],
    stack: ['Postgres', 'dbt', 'Airflow (optional)'],
  },
]

export const EXPERIENCE = [
  { role: 'Senior Data Analyst', place: 'Product Org', years: '2023 - Present', note: 'Built KPI governance, rolled out dashboard standards, coached analysts.' },
  { role: 'BI Lead', place: 'Ops & Growth', years: '2021 - 2023', note: 'Delivered forecasting suite and self-serve data mart.' },
  { role: 'Data Analyst', place: 'Marketplace', years: '2019 - 2021', note: 'Owned reporting, instrumentation, and ad-hoc experiment reads.' },
]

export const CERTIFICATES = [
  { title: 'Analytics Practitioner', org: 'Google', year: '2024' },
  { title: 'dbt Fundamentals', org: 'dbt Labs', year: '2023' },
  { title: 'Power BI Data Analyst', org: 'Microsoft', year: '2022' },
]
