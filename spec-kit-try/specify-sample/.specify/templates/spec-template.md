# 機能仕様: [FEATURE NAME]

**Feature Branch**: `[###-feature-name]`  
**Created**: [DATE]  
**Status**: Draft  
**Input**: User description: "$ARGUMENTS"

## ユーザーシナリオ & テスト *(必須)*

<!--
  IMPORTANT: User stories should be PRIORITIZED as user journeys ordered by importance.
  Each user story/journey must be INDEPENDENTLY TESTABLE - meaning if you implement just ONE of them,
  you should still have a viable MVP (Minimum Viable Product) that delivers value.
  
  Assign priorities (P1, P2, P3, etc.) to each story, where P1 is the most critical.
  Think of each story as a standalone slice of functionality that can be:
  - Developed independently
  - Tested independently
  - Deployed independently
  - Demonstrated to users independently
-->

### ユーザーストーリー 1 - [Brief Title] (優先度: P1)

[このユーザージャーニーを平易に記述]

**この優先度の理由**: [この価値と優先度の理由を説明]

**独立テスト**: [このストーリー単体でテストできる方法 - 例: "[具体的な操作] で完全にテストでき、[具体的価値] を提供"]

**受け入れシナリオ**:

1. **Given** [初期状態], **When** [操作], **Then** [期待結果]
2. **Given** [初期状態], **When** [操作], **Then** [期待結果]

---

### ユーザーストーリー 2 - [Brief Title] (優先度: P2)

[このユーザージャーニーを平易に記述]

**この優先度の理由**: [この価値と優先度の理由を説明]

**独立テスト**: [このストーリー単体でテストできる方法]

**受け入れシナリオ**:

1. **Given** [初期状態], **When** [操作], **Then** [期待結果]

---

### ユーザーストーリー 3 - [Brief Title] (優先度: P3)

[このユーザージャーニーを平易に記述]

**この優先度の理由**: [この価値と優先度の理由を説明]

**独立テスト**: [このストーリー単体でテストできる方法]

**受け入れシナリオ**:

1. **Given** [初期状態], **When** [操作], **Then** [期待結果]

---

[必要に応じてユーザーストーリーを追加し、優先度を付与]

### エッジケース

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right edge cases.
-->

- [境界条件] のときはどうなるか？
- [エラーシナリオ] をどう扱うか？

## 要件 *(必須)*

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right functional requirements.
-->

### 機能要件

- **FR-001**: システムは [具体的機能] を提供しなければならない
- **FR-002**: システムは [具体的機能] を提供しなければならない  
- **FR-003**: ユーザーは [主要操作] を実行できなければならない
- **FR-004**: システムは [データ要件] を満たさなければならない
- **FR-005**: システムは [挙動] を行わなければならない

*不明な要件の例:*

- **FR-006**: システムは [NEEDS CLARIFICATION: 認証方式未指定 - メール/パスワード, SSO, OAuth?] で認証しなければならない
- **FR-007**: システムは [NEEDS CLARIFICATION: 保持期間未指定] の間データを保持しなければならない

### UX 一貫性要件

- **UX-001**: UI は既存のデザインシステムのコンポーネントとトークンを使用すること
- **UX-002**: ユーザー向け文言はプロジェクトのスタイルガイドに従うこと
- **UX-003**: 新規/変更画面は WCAG 2.1 AA に準拠すること

### パフォーマンス要件

- **PR-001**: この機能の計測可能なパフォーマンス予算を定義すること
- **PR-002**: 予算検証のためのベンチマークまたはプロファイル計画を示すこと

### 主要エンティティ *(データが関与する場合)*

- **[Entity 1]**: [意味と主要属性（実装ではなく概念）]
- **[Entity 2]**: [意味と関係]

## 成功基準 *(必須)*

<!--
  ACTION REQUIRED: Define measurable success criteria.
  These must be technology-agnostic and measurable.
-->

### 測定可能な成果

- **SC-001**: [測定可能な指標 - 例: "アカウント作成を 2 分以内で完了"]
- **SC-002**: [測定可能な指標 - 例: "同時 1000 ユーザーを劣化なく処理"]
- **SC-003**: [ユーザー満足度指標 - 例: "主要タスクの初回成功率 90%"]
- **SC-004**: [ビジネス指標 - 例: "[X] 関連のサポートチケットを 50% 削減"]
