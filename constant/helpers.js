import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('365.db');

export const saveToDB = (token) => {

    db.transaction( tx => {
        tx.executeSql(
            'create table if not exists user (id integer primary key not null, token text);'
        );
        tx.executeSql('insert into user (token) values (?);',[token])
    });

}

export const deleteRow = () => {
    db.transaction(
        tx => {
          tx.executeSql("select * from user", [], (_, { rows }) => {

            const id = rows._array[0].id
            console.log(id)
            tx.executeSql(`delete from user where id = ?;`, [id]);
          });
        },
      );
}