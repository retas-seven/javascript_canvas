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
        Maruo.loadImage();

        // 描画するキャラクタを作成
        this.cm.add(new Maruo(50, 150, 3, 5));
        this.cm.add(new Maruo(300, 400, -2, -6));
        this.cm.add(new Maruo(200, 500, -8, -7));

        for (let i = 0; i < 50; i++) {
            this.cm.add(new Maruo(
                Math.random() * 500
                , Math.random() * 300
                , Math.random() * 10
                , Math.random() * 10));
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