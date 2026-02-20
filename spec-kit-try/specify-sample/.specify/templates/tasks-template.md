---

description: "機能実装のタスクリストテンプレート"
---

# タスク: [FEATURE NAME]

**Input**: `/specs/[###-feature-name]/` の設計ドキュメント
**Prerequisites**: plan.md（必須）、spec.md（ユーザーストーリーに必須）、research.md、data-model.md、contracts/

**Tests**: 以下の例にはテストタスクが含まれる。新規・変更された挙動にはテストが必須。省略は spec/plan で明示的に例外を記録すること。

**Organization**: タスクはユーザーストーリーごとに整理し、各ストーリーが独立に実装・テストできるようにする。

## 形式: `[ID] [P?] [Story] 説明`

- **[P]**: 並列実行可（別ファイル、依存なし）
- **[Story]**: 対応するユーザーストーリー（例: US1, US2, US3）
- 説明に具体的なファイルパスを含めること

## パス規約

- **Single project**: `src/`, `tests/` をリポジトリルートに配置
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` または `android/src/`
- 以下は Single project 前提。plan.md の構成に合わせて調整すること

<!-- 
  ============================================================================
  IMPORTANT: The tasks below are SAMPLE TASKS for illustration purposes only.
  
  The /speckit.tasks command MUST replace these with actual tasks based on:
  - User stories from spec.md (with their priorities P1, P2, P3...)
  - Feature requirements from plan.md
  - Entities from data-model.md
  - Endpoints from contracts/
  
  Tasks MUST be organized by user story so each story can be:
  - Implemented independently
  - Tested independently
  - Delivered as an MVP increment
  
  DO NOT keep these sample tasks in the generated tasks.md file.
  ============================================================================
-->

## Phase 1: Setup（共有インフラ）

**Purpose**: プロジェクト初期化と基本構造

- [ ] T001 計画に従ってプロジェクト構造を作成
- [ ] T002 [language] プロジェクトを [framework] 依存で初期化
- [ ] T003 [P] lint/format ツールを設定

---

## Phase 2: Foundational（前提ブロック）

**Purpose**: すべてのユーザーストーリーに先立つ基盤

**⚠️ CRITICAL**: このフェーズ完了までユーザーストーリーに着手しない

例（必要に応じて調整）:

- [ ] T004 DB スキーマとマイグレーション基盤を構築
- [ ] T005 [P] 認証/認可フレームワークを実装
- [ ] T006 [P] API ルーティングとミドルウェア構造を用意
- [ ] T007 共有エンティティ/モデルを作成
- [ ] T008 エラーハンドリングとログ基盤を設定
- [ ] T009 環境設定管理を整備

**Checkpoint**: 基盤完成 - 以降はユーザーストーリーを並行実装可能

---

## Phase 3: ユーザーストーリー 1 - [Title] (優先度: P1) 🎯 MVP

**Goal**: [このストーリーで提供する価値]

**Independent Test**: [このストーリー単体の検証方法]

### ユーザーストーリー 1 のテスト（必須）⚠️

> **NOTE: 実装前にテストを書き、失敗することを確認する**

- [ ] T010 [P] [US1] tests/contract/test_[name].py に契約テストを追加
- [ ] T011 [P] [US1] tests/integration/test_[name].py に統合テストを追加

### ユーザーストーリー 1 の実装

- [ ] T012 [P] [US1] src/models/[entity1].py に [Entity1] モデルを作成
- [ ] T013 [P] [US1] src/models/[entity2].py に [Entity2] モデルを作成
- [ ] T014 [US1] src/services/[service].py に [Service] を実装（T012, T013 依存）
- [ ] T015 [US1] src/[location]/[file].py に [endpoint/feature] を実装
- [ ] T016 [US1] バリデーションとエラーハンドリングを追加
- [ ] T017 [US1] ユーザーストーリー 1 のログを追加

**Checkpoint**: ユーザーストーリー 1 が単体で機能し検証可能

---

## Phase 4: ユーザーストーリー 2 - [Title] (優先度: P2)

**Goal**: [このストーリーで提供する価値]

**Independent Test**: [このストーリー単体の検証方法]

### ユーザーストーリー 2 のテスト（必須）⚠️

- [ ] T018 [P] [US2] tests/contract/test_[name].py に契約テストを追加
- [ ] T019 [P] [US2] tests/integration/test_[name].py に統合テストを追加

### ユーザーストーリー 2 の実装

- [ ] T020 [P] [US2] src/models/[entity].py に [Entity] モデルを作成
- [ ] T021 [US2] src/services/[service].py に [Service] を実装
- [ ] T022 [US2] src/[location]/[file].py に [endpoint/feature] を実装
- [ ] T023 [US2] ユーザーストーリー 1 と連携（必要な場合）

**Checkpoint**: ユーザーストーリー 1 と 2 が独立に動作

---

## Phase 5: ユーザーストーリー 3 - [Title] (優先度: P3)

**Goal**: [このストーリーで提供する価値]

**Independent Test**: [このストーリー単体の検証方法]

### ユーザーストーリー 3 のテスト（必須）⚠️

- [ ] T024 [P] [US3] tests/contract/test_[name].py に契約テストを追加
- [ ] T025 [P] [US3] tests/integration/test_[name].py に統合テストを追加

### ユーザーストーリー 3 の実装

- [ ] T026 [P] [US3] src/models/[entity].py に [Entity] モデルを作成
- [ ] T027 [US3] src/services/[service].py に [Service] を実装
- [ ] T028 [US3] src/[location]/[file].py に [endpoint/feature] を実装

**Checkpoint**: すべてのユーザーストーリーが独立に機能

---

[必要に応じて追加のユーザーストーリーを同様の形式で追加]

---

## Phase N: 仕上げ & 横断的対応

**Purpose**: 複数ストーリーに影響する改善

- [ ] TXXX docs/ のドキュメント更新
- [ ] TXXX コード整理とリファクタリング
- [ ] TXXX パフォーマンス最適化（全ストーリー対象）
- [ ] TXXX UX 一貫性とアクセシビリティのレビュー
- [ ] TXXX [P] 追加の単体テスト（必要に応じて） in tests/unit/
- [ ] TXXX セキュリティ強化
- [ ] TXXX quickstart.md の検証

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
- **User Story 2 (P2)**: Foundational 完了後、必要に応じて US1 と連携
- **User Story 3 (P3)**: Foundational 完了後、必要に応じて US1/US2 と連携

### 各ストーリー内の順序

- テスト（含む場合）は実装前に書き、失敗を確認
- モデル → サービス → エンドポイント
- コア実装 → 統合
- ストーリー完了後に次の優先度へ

### 並行可能な作業

- Setup の [P] は並行可能
- Foundational の [P] は並行可能
- Foundational 完了後は、複数ストーリーを並行可能
- ストーリー内の [P] テストは並行可能
- ストーリー内の [P] モデルは並行可能
- ストーリー間は担当者を分けて並行可能

---

## 並行例: ユーザーストーリー 1

```bash
# ユーザーストーリー 1 のテストを並行実行:
Task: "Contract test for [endpoint] in tests/contract/test_[name].py"
Task: "Integration test for [user journey] in tests/integration/test_[name].py"

# ユーザーストーリー 1 のモデルを並行実行:
Task: "Create [Entity1] model in src/models/[entity1].py"
Task: "Create [Entity2] model in src/models/[entity2].py"
```

---

## 実装戦略

### MVP 優先（ユーザーストーリー 1 のみ）

1. Phase 1: Setup 完了
2. Phase 2: Foundational 完了（クリティカル）
3. Phase 3: ユーザーストーリー 1 完了
4. **STOP and VALIDATE**: ストーリー 1 の単独検証
5. 必要ならデプロイ/デモ

### 段階的リリース

1. Setup + Foundational 完了 → 基盤準備
2. ストーリー 1 追加 → 単独テスト → デプロイ/デモ
3. ストーリー 2 追加 → 単独テスト → デプロイ/デモ
4. ストーリー 3 追加 → 単独テスト → デプロイ/デモ
5. 各ストーリーが独立価値を提供

### 並行チーム戦略

複数人の場合:

1. チームで Setup + Foundational を完了
2. 完了後:
   - 開発者 A: ストーリー 1
   - 開発者 B: ストーリー 2
   - 開発者 C: ストーリー 3
3. 各ストーリーを独立に完了・統合

---

## Notes

- [P] タスク = 別ファイル・依存なし
- [Story] ラベルで追跡可能
- 各ストーリーは独立に完結・テスト可能
- 実装前にテスト失敗を確認
- 各タスクまたは論理単位でコミット
- チェックポイントで単独検証
- 避ける: 曖昧なタスク、同一ファイル競合、独立性を壊す依存
