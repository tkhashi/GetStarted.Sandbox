# タスク: TaskFlow

**Input**: `/specs/001-taskflow-time-blocking/` の設計ドキュメント
**Prerequisites**: plan.md（必須）、spec.md（必須）、research.md、data-model.md、contracts/

**Tests**: 新規・変更された挙動にはテストが必須。省略は spec/plan で明示的に例外を記録すること。

**Organization**: タスクはユーザーストーリーごとに整理し、各ストーリーが独立に実装・テストできるようにする。

## 形式: `[ID] [P?] [Story] 説明`

- **[P]**: 並列実行可（別ファイル、依存なし）
- **[Story]**: 対応するユーザーストーリー（例: US1, US2, US3）
- 説明に具体的なファイルパスを含めること

## パス規約

- **Web app**: `src/`, `tests/` をリポジトリルートに配置
- パスは plan.md の構成に合わせる

---

## Phase 1: Setup（共有インフラ）

**Purpose**: プロジェクト初期化と基本構造

- [ ] T001 Vite の Vanilla プロジェクトを初期化（`package.json`, `vite.config.js`）
- [ ] T002 アプリの基本エントリを作成（`index.html`, `src/main.js`）
- [ ] T003 [P] ベーススタイルを追加（`src/styles/app.css`）
- [ ] T004 [P] lint/format 設定を追加（`eslint.config.js`, `.prettierrc`）
- [ ] T005 [P] テスト基盤を設定（`vitest.config.js`, `playwright.config.js`）

---

## Phase 2: Foundational（前提ブロック）

**Purpose**: すべてのユーザーストーリーに先立つ基盤

**⚠️ CRITICAL**: このフェーズ完了までユーザーストーリーに着手しない

- [ ] T006 IndexedDB の接続層を実装（`src/app/storage/db.js`）
- [ ] T007 タスク/タイムブロックの永続化 API を実装（`src/app/storage/task_store.js`, `src/app/storage/time_block_store.js`）
- [ ] T008 アプリ状態ストアを実装（`src/app/state/store.js`）
- [ ] T009 日付/時間ユーティリティを実装（`src/utils/datetime.js`）
- [ ] T010 画面レイアウト骨格を実装（`src/app/ui/layout.js`）
- [ ] T011 ルート組み立てを実装（`src/main.js`）

**Checkpoint**: 基盤完成 - 以降はユーザーストーリーを並行実装可能

---

## Phase 3: ユーザーストーリー 1 - タスクを作成・整理する (優先度: P1) 🎯 MVP

**Goal**: タスクを作成・編集・完了し、一覧で状態を確認できる

**Independent Test**: タスクの作成/更新/完了が保存され、一覧表示に反映される

### ユーザーストーリー 1 のテスト（必須）⚠️

- [ ] T012 [P] [US1] タスク永続化の単体テストを追加（`tests/unit/task_store.test.js`）
- [ ] T013 [P] [US1] タスク作成/完了の E2E を追加（`tests/integration/task_flow.spec.js`）

### ユーザーストーリー 1 の実装

- [ ] T014 [US1] タスクモデルと検証を実装（`src/app/state/task_model.js`）
- [ ] T015 [P] [US1] タスクリスト UI を実装（`src/components/task_list.js`）
- [ ] T016 [P] [US1] タスク作成/編集フォームを実装（`src/components/task_form.js`）
- [ ] T017 [US1] タスク操作アクションを実装（`src/app/state/task_actions.js`）
- [ ] T018 [US1] タスク画面を組み立て（`src/app/ui/task_view.js`）
- [ ] T019 [US1] タスク UI のスタイルを追加（`src/styles/task.css`）

**Checkpoint**: ユーザーストーリー 1 が単体で機能し検証可能

---

## Phase 4: ユーザーストーリー 2 - タイムブロックを作成する (優先度: P1)

**Goal**: タスクに開始/終了時刻を割り当て、日次ビューに表示できる

**Independent Test**: タイムブロックの作成/更新が保存され、日次ビューに反映される

### ユーザーストーリー 2 のテスト（必須）⚠️

- [ ] T020 [P] [US2] タイムブロック永続化の単体テストを追加（`tests/unit/time_block_store.test.js`）
- [ ] T021 [P] [US2] タイムブロック作成/更新の E2E を追加（`tests/integration/time_block_flow.spec.js`）

### ユーザーストーリー 2 の実装

- [ ] T022 [US2] タイムブロックモデルと検証を実装（`src/app/state/time_block_model.js`）
- [ ] T023 [P] [US2] タイムブロックフォーム UI を実装（`src/components/time_block_form.js`）
- [ ] T024 [P] [US2] 日次ビュー UI を実装（`src/components/day_view.js`）
- [ ] T025 [US2] タイムブロック操作アクションを実装（`src/app/state/time_block_actions.js`）
- [ ] T026 [US2] 重複検知ロジックを実装（`src/utils/overlap.js`）
- [ ] T027 [US2] 日次ビューを状態に接続（`src/app/ui/day_view.js`）
- [ ] T028 [US2] 重複警告 UI を実装（`src/components/overlap_warning.js`）
- [ ] T029 [US2] タイムブロック UI のスタイルを追加（`src/styles/time_block.css`）

**Checkpoint**: タイムブロックの作成/更新が独立に機能

---

## Phase 5: ユーザーストーリー 3 - 1日の計画を見直し調整する (優先度: P2)

**Goal**: 日次ビューでタイムブロックを移動・再調整できる

**Independent Test**: ブロックの移動/再調整が保存され、一覧と日次表示が一致する

### ユーザーストーリー 3 のテスト（必須）⚠️

- [ ] T030 [P] [US3] 日次調整フローの E2E を追加（`tests/integration/day_adjust_flow.spec.js`）

### ユーザーストーリー 3 の実装

- [ ] T031 [US3] ブロック編集 UI を実装（`src/components/time_block_item.js`）
- [ ] T032 [US3] 再調整フローを実装（`src/app/ui/day_view.js`）
- [ ] T033 [US3] 一覧と日次の同期を実装（`src/app/state/sync.js`）
- [ ] T034 [US3] 日次ビューのスタイルを追加（`src/styles/day_view.css`）

**Checkpoint**: すべてのユーザーストーリーが独立に機能

---

## Phase 6: 仕上げ & 横断的対応

**Purpose**: 複数ストーリーに影響する改善

- [ ] T035 パフォーマンス計測を追加（`src/utils/perf.js`, `src/main.js`）
- [ ] T036 アクセシビリティ確認の記録を作成（`docs/accessibility-review.md`）
- [ ] T037 UX 一貫性チェックの記録を作成（`docs/ux-review.md`）
- [ ] T038 仕様書の quickstart 検証を記録（`specs/001-taskflow-time-blocking/quickstart.md`）

---

## 依存関係 & 実行順序

### フェーズ依存

- **Setup (Phase 1)**: 依存なし、即開始可能
- **Foundational (Phase 2)**: Setup 完了に依存、全ユーザーストーリーをブロック
- **User Stories (Phase 3+)**: Foundational 完了後に開始
  - 可能なら並行
  - もしくは P1 → P2 → P3 の順
- **Polish (Final Phase)**: すべてのユーザーストーリー完了後

### ユーザーストーリー依存

- **User Story 1 (P1)**: Foundational 完了後、他ストーリー依存なし
- **User Story 2 (P1)**: Foundational 完了後、他ストーリー依存なし
- **User Story 3 (P2)**: Foundational 完了後、必要に応じて US1/US2 と連携

### 各ストーリー内の順序

- テスト → モデル → サービス/アクション → UI → 統合
- ストーリー完了後に次の優先度へ

### 並行可能な作業

- Setup の [P] は並行可能
- Foundational 完了後、US1 と US2 は並行可能
- 各ストーリー内の [P] は並行可能

---

## 並行例: ユーザーストーリー 2

```bash
Task: "タスク作成/編集フォームを実装（src/components/time_block_form.js）"
Task: "日次ビュー UI を実装（src/components/day_view.js）"
```

---

## 実装戦略

### MVP 優先（ユーザーストーリー 1 のみ）

1. Phase 1: Setup 完了
2. Phase 2: Foundational 完了
3. Phase 3: ユーザーストーリー 1 完了
4. **STOP and VALIDATE**: ストーリー 1 の単独検証

### 段階的リリース

1. Setup + Foundational 完了
2. ストーリー 1 追加 → 単独テスト
3. ストーリー 2 追加 → 単独テスト
4. ストーリー 3 追加 → 単独テスト
5. 仕上げ対応
