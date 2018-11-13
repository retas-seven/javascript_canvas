/**
 * キャラクタを管理するクラス
 */
class CharacterManager {
    /**
     * 初期化
     */
    constructor() {
        this.characterList = [];
    }

    add(character) {
        this.characterList.push(character);
    }

    draw() {
        // キャラクタを描画する
        for (let c of this.characterList) {
            c.draw();
        }
    }

    run() {
        // 左クリックイベントの処理
        if (mouse.isLeft) {
            for (let c of this.characterList) {
                if (c.x <= mouse.x && mouse.x <= (c.x + c.width) && c.y <= mouse.y && mouse.y <= (c.y + c.height)) {
                    c.leftClick();
                }
            }
        }

        // 右クリックイベントの処理
        if (mouse.isRight) {
            for (let c of this.characterList) {
                if (c.x <= mouse.x && mouse.x <= (c.x + c.width) && c.y <= mouse.y && mouse.y <= (c.y + c.height)) {
                    c.rightClick();
                }
            }
        }

        // キャラクタを動かす
        for (let i = 0; i < this.characterList.length; i++) {
            this.characterList[i].run();

            // 終了フラグが立っている場合は配列から取り除く
            if (this.characterList[i].isEnd) {
                this.characterList.splice(i, 1);
                i--;
            }
        }
    }
}