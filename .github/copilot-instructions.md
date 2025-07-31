# Copilot Instructions for AI Coding Agents

## プロジェクト概要
- このリポジトリは「Copilot Code Review」機能の検証用です。
- メインのコードは `web-front/` ディレクトリ配下にあります。
- `web-front` はVite + TypeScriptによる最小限のフロントエンドSPAです。

## 主要構成
- `web-front/index.html`: ルートHTML。`/src/main.ts` をエントリポイントとして読み込みます。
- `web-front/src/main.ts`: カウンター機能の実装例。`#counter` ボタンのクリックで数値がインクリメントされます。
- `web-front/src/style.css`: スタイル定義（現状空ファイル）。
- `web-front/package.json`: スクリプトや依存管理。`vite`・`typescript`がdevDependencies。
- `web-front/tsconfig.json`: TypeScriptの厳格な設定。`noEmit: true` で型チェック専用。

## ビルド・開発ワークフロー
- 開発サーバ起動: `npm run dev`（`web-front` ディレクトリで実行）
- 本番ビルド: `npm run build`（TypeScript型チェック後にViteでビルド）
- プレビュー: `npm run preview`
- 依存追加: `npm install <package>`（`web-front`直下で）

## プロジェクト固有の注意点
- TypeScriptは厳格モード。未使用変数・パラメータ・副作用のないimport等はエラー。
- `src/`配下のみをTypeScriptの対象とする。
- Viteのバンドラーモードを利用（`moduleResolution: bundler`）。
- CSSは`src/style.css`に記述。
- 追加UIやロジックは`src/`配下にファイルを追加して実装。

## 例外・独自パターン
- サーバサイドやAPI連携は現状なし。
- テストやCI/CDの設定は未導入。
- READMEやこのファイルの内容が最新の開発方針。

---

### 参考ファイル
- `README.md`（日本語）: プロジェクトの目的とディレクトリ概要
- `web-front/package.json`: スクリプト・依存
- `web-front/tsconfig.json`: TypeScript設定
- `web-front/index.html`, `web-front/src/main.ts`: 実装例

