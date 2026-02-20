# 研究メモ: TaskFlow

**Date**: 2026-02-20
**Scope**: Vite + Vanilla 構成、IndexedDB 保存、タイムブロック UX

## Decision 1: Vite + Vanilla 構成
- **Decision**: Vite をビルド/開発サーバとして利用し、UI は Vanilla HTML/CSS/JS で実装
- **Rationale**: 依存を最小化しつつ高速な開発体験とビルドを両立できる
- **Alternatives considered**:
  - 追加フレームワーク導入: 学習/依存コストが増えるため不採用

## Decision 2: IndexedDB 永続化
- **Decision**: IndexedDB にタスクとタイムブロックを保存する
- **Rationale**: オフラインでも利用でき、構造化データの検索/更新に適する
- **Alternatives considered**:
  - localStorage: 容量と検索性の制限が大きい
  - サーバ同期: 要件外（単一ユーザー/ローカル前提）

## Decision 3: データ層の薄いラッパー
- **Decision**: IndexedDB へ直接アクセスする薄いラッパーを実装
- **Rationale**: 追加ライブラリを避けつつ、テスト可能な抽象を確保する
- **Alternatives considered**:
  - フル機能ライブラリ採用: 依存が増えるため不採用

## Decision 4: タイムブロックの重複は警告で許容
- **Decision**: 重複は警告として表示し、保存自体は可能とする
- **Rationale**: 仕様要件（明確な警告）を満たしつつ、柔軟な調整を妨げない
- **Alternatives considered**:
  - 重複を禁止: 予定の微調整や例外対応を阻害する

## Decision 5: パフォーマンス予算
- **Decision**: 日次ビュー表示 2 秒以内（95%）、主要操作反映 5 秒以内
- **Rationale**: 仕様の成功基準に一致し、体感性能を保証する
- **Alternatives considered**:
  - より厳しい予算: 初期スコープでは過剰と判断
