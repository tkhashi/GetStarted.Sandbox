# データモデル: TaskFlow

**Date**: 2026-02-20

## Entity: User
**Purpose**: 単一ユーザーの識別（ローカル利用）
**Fields**:
- id: string (固定値 "local")
- displayName: string (任意)

## Entity: Task
**Purpose**: TODO 項目の管理
**Fields**:
- id: string (UUID)
- title: string (必須, 1-100 文字)
- description: string (任意, 0-1000 文字)
- status: enum("todo", "done")
- priority: enum("low", "medium", "high") (任意, default "medium")
- createdAt: datetime
- updatedAt: datetime

**Relationships**:
- Task 1..N TimeBlock（1 つのタスクに複数のタイムブロックを紐づけ可能）

**Validation Rules**:
- title は空白不可
- status 変更は todo <-> done のみ

## Entity: TimeBlock
**Purpose**: タスクに紐づく時間枠
**Fields**:
- id: string (UUID)
- taskId: string (Task.id)
- date: date (YYYY-MM-DD)
- startTime: time (HH:mm)
- endTime: time (HH:mm)
- createdAt: datetime
- updatedAt: datetime

**Relationships**:
- TimeBlock は必ず Task に属する

**Validation Rules**:
- startTime < endTime
- date, startTime, endTime は必須
- 同一日付での重複は「警告」扱い（保存は許可）

## Derived Views
- 未割当タスク: TimeBlock を持たない Task
- 日次ビュー: date でフィルタした TimeBlock を startTime 順に表示
