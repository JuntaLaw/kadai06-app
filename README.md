# Kadai07 Nyatflix 完全版
Next.js, Supabase, Prismaで猫動画専門サイトNYATFLIXを作ってみた

## DEMO

  - https://kadai06-app-h979-9m4pysqsf-junko-satos-projects.vercel.app/login

## 紹介と使い方

  - 猫動画専門動画サイトNYATFLIX（NETFLIXクローン）をNext.js v14で作成しています。データベースはSupabase(PostgreSQL)をPrismaを連携して使用しています。

  - E-mail、Github、Googleアカウントでの新規登録とログインが可能です（Next．authを使用）
![login page capture](/capture/Screenshot_login.png)
  - 登録＆ログインするとコンテンツページへ。
![contents page capture](/capture/Screenshot_contents.png)
  - コンテンツのプレビュー右上にあるハートボタンを押すと、Watch Listにお気に入り登録できます。Watchlist内での削除も可能です。
![watchlist page capture](/capture/Screenshot_watchlist.png)

    - SQLファイルはMigration時のものが下記フォルダにあります。 
  prisma/migrations/20231212170903_my_migrate_init/migration.sql
  (SupabaseのDB全体を出すのはまだちょっとできていません) 


## 工夫した点

  - Next.js、Supabase、Prismaを使ってみました。 

  - 卒業制作では、動画配信と動画編集の機能を持たせたサービスを作成予定です。そのため、まずは練習として、既存の動画配信サイトのクローン的なものを作成してみました。先週はまずログイン認証画面まで作成しており、今週はその継続でコンテンツページの作成を行いました（そのため、開発フォルダは先週のものを継続して使用し、デプロイもそのリポジトリから行っています。リポジトリ名が06のままで申し訳ございません）。

  - 技術選定について① Next.js:
    Next.jsはReactのフレームワーク。ReactはUI構築に特化しているのに対し、Next.jsはSSR（サーバーサイドレンダリング）に対応している。Next.jsを使用することで、サーバーサイドを別に構築せずにWebアプリケーションの開発ができる。
    
    - 実際に、PHP環境からNext.jsへのリプレイスが行われているケースが最近は多い模様。そのせいか、最近、デジタル庁のサイトが逆にNext.jsからPHPへ戻った？（諸説あり）ということが話題になっていた。
     - Pixivの事例：https://inside.pixiv.blog/2022/08/15/120000 
     - PR TIMESの事例: https://developers.prtimes.jp/2023/12/13/replace-press-release-page-with-nextjs/ 
     - デジタル庁のサイトがNext.jsからphpとjQueryに先祖返りしたわけではなかった： https://note.com/akikito/n/n56d7ebef50d4
  
  - 技術選定について② Supabase:
    Supabaseとは、Supabase は、オープンソースの Firebase の代替品（と公式が言っている）。データベースはFirebaseのNosqlと違い、RDBのPostgreSQLを使用している。PostgreSQLをベースに、リアルタイム更新、認証、ストレージ、サーバーレス関数など、フルスタック開発に必要な機能が提供されている。Next.jsとも相性が良く、統合して使用するための公式テンプレートも提供されている。 

      - PostgreSQLとは、MySQLとの違い：

          - MySQL：純粋なリレーショナルデータベース。読み取り専用のコマンドを管理するのに適している。

          - PostgreSQL：オブジェクトリレーショナルデータベース。データをプロパティ付きのオブジェクトとして保存できる。読み書き操作、大きなデータセット、複雑なクエリを管理するのに適している。 

        - Next.jsではPostgreSQLが標準なので、こちらを使用していきたい。

  - 技術選定について③ Prisma：
    Prismaは、Node.jsを対象としたオープンソースのORM(Object-relational mapping)。Typescriptと相性が良い。
    
    ORMとは、データベースとオブジェクト指向プログラミング言語の間の非互換なデータを変換するプログラミング技法。オブジェクト関連マッピングとも呼ぶ。簡単に言うと、プログラミング言語のオブジェクトで定義したメソッドで、SQLを書かずにデータベースの操作が可能なツール。

    SQLを書かなくても良いというメリットは分かったが、Supabase + Next.js のみの組み合わせでPostgreSQLを使用した方が開発しやすいのでは？という印象を持ったので、今後はどちらも試して検証してみたい。 
    
  - 猫のコンテンツ探しにほぼ1日かけてしまいました。

  - ログインページの背景画像は、Stable DiffusionのDreamStudioにNETFLIXの背景画像を読み込ませて、猫画像で同様のものを作成するように指示して書き出しています。
  - ロゴはCanvaで作成しました。

  - UIにはShadcn/UIを使用しています。めっちゃ便利。
  
  - ログイン認証には Next.authを使用しています。

  - コンテンツ素材のアップロードにCloudinaryを使用。こちらのAPIは今後の開発に使用していきたいです。 

## 苦戦した点

  - SupabaseとPrismaにはじめてチャレンジしたので、各種チュートリアルや公式ドキュメントなどでまず理解するところにかなり時間を使ってしまった。
  - Next.jsを最新バージョンで使用しているので、ネット上の古い情報が参考にならないことが多く、理解に苦労した。そのおかげで、公式のドキュメントやチュートリアルが一番わかりやすいことに気づけたので良かったのかもしれない。
  - 初めは見つけてきたチュートリアルに従ってPrismaを使用していたが、途中からPrismaなしでSupabaseを使用した方が良かったかもしれないと思った。Next.js + SupabaseでPostgreSQLを使用する方法で今後は開発してみたい。
  - 課題と異なる言語・環境・DBを使用してしまったため、課題の指示にあるSQLファイルを出すことが難しくなってしまった。（そもそもPSQLでSQLでない。SupabaseからDB全体のdumpファイルを出す方法があるのは分かったが、今回Prismaを噛ませてしまったので、実際にできるのかよくわからず。PrismaからはMigration時にmigration.sqlが吐き出されるが、この時点ではDB構造のみでデータの中身はNull。この辺りで、Prismaを使用しない方が良かったのでは？と思い始めた）

## 参考にした web サイトなど 
  - 今回、参考にしたチュートリアル動画：おすすめ！
  https://www.youtube.com/watch?v=mTW3V2IpOrg&t=3s
  - Next.js: https://nextjs.org/ 
  - Supabase: https://supabase.com/
  - Prisma: https://www.prisma.io/
  - Tailwind.css: https://tailwindcss.com/
  - Shadcn/UI: https://ui.shadcn.com/
  - Next-Auth: https://next-auth.js.org/
  - Stabla Diffusion: https://ja.stability.ai/stable-diffusion
  - Cloudinary: https://cloudinary.com/ 