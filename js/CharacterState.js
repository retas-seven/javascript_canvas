/**
 * サンプル画面（キャラクタ）
 */
class CharacterState extends StateBase {
    constructor() {
        super();
    }

    /**
     * 初期化
     */
    init () {
        // 使用するキャラクタの画像を読み込む
        this.cm.loadImage (
            () => {
                this.isReady = true;
                console.log("isReady:" + this.isReady);
                execMainLoop();
            }
            , Maruo.IMAGE_NAME
            , MaruoRed.IMAGE_NAME
        );

        // 描画するキャラクタを作成
        for (let i = 0; i < 45; i++) {
            this.cm.add(new Maruo(
                Math.random() * 650
                , Math.random() * 350
                , Math.random() * 5 + 3
                , Math.random() * 5 + 3));
        }

        for (let i = 0; i < 25; i++) {
            this.cm.add(new MaruoRed(
                Math.random() * 650
                , Math.random() * 350
                , Math.random() * 7 + 4
                , Math.random() * 7 + 4));
        }

        // 背景色を設定
        back.fillStyle = 'rgb(20, 35, 85)';
        back.fillRect(0, 0, WIDTH, HEIGHT);
    }

    /**
     * 描画
     */
    draw() {
        this.cm.draw();
    }

    /**
     * 状態を更新
     */
    run() {
        this.cm.run();

        if (mouse.isRight) {
            this.changeState("RectState");
        }

        if (this.cm.characterList.length == 0) {
            this.changeState("CircleState");
        }

        if (mouse.isLeft) {
            console.log("CharacterState　左クリック");
        }

        if (mouse.isRight) {
            console.log("CharacterState　右クリック");
        }
    }
}