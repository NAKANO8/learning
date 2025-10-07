# メモ
## 構成
publicにあるのが、フロントエンドの役割を果たしている
画面に表示させているのはhtml&&css,チェックをscript.jsが担当している
server.jsがDBとの接続を担当 backend機能を持っている

## 覚えておくべきコマンド
docker exec -it mysql sh -lc "mysql -h 127.0.0.1 -P 3306 -uroot -p$MYSQL_ROOT_PASSWORD"
docker_dbの中に入ることができる

USE contact_form;
SELECT id, email, LEFT(password_hash, 12) AS pwd_head, LEFT(message, 30) AS msg_head, created_at
FROM contacts
ORDER BY id DESC
LIMIT 10;

dbの中身が見れる、めんどくさかったのでaliasしてrecentで見れるようにしている
~/.bashrcをみろ！

SELECT * FROM contacts WHERE id = <id_name>;
DELETE FROM contacts WHERE id = <id_name>;