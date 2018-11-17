/**
 * キャラクタ
 */
class MaruoRed extends CharacterBase {
    /**
     * 使用する画像名
     */
    static get IMAGE_NAME() {
        return ["./img/maruo_red_1.png", "./img/maruo_red_2.png","./img/maruo_red_3.png"];
    }

    /**
     * １つの画像を表示するフレーム数
     */
    static get DRAW_FRAME() {
        return 2;
    }

    /**
     * キャラクタの高さ
     */
    static get WIDTH() {
        return 50;
    }

    /**
     * １キャラクタの横幅
     */
    static get HEIGHT() {
        return 50;
    }

    /**
     * 初期化
     */
    constructor(x, y, dx, dy) {
        super();
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.boundCnt = 0;
        this.imgIndex = 0;
        this.frameCnt = 0;
        this.width = MaruoRed.WIDTH;
        this.height = MaruoRed.HEIGHT;
        this.isReachedLeftEnd = false;
    }

    run() {
        this.x += this.dx;
        this.y += this.dy;

        if ((WIDTH - this.width) < this.x) {
            if (this.isReachedLeftEnd) {
                this.x = (WIDTH - this.width);
                this.dx = -this.dx;
                this.boundCnt++;
            }
        } else if (this.x < 0) {
            this.x = 0;
            this.dx = -this.dx;
            this.boundCnt++;
            if (!this.isReachedLeftEnd) {
                this.isReachedLeftEnd = true;
            }
        }
        if ((HEIGHT - this.height) < this.y) {
            this.y = (HEIGHT - this.height);
            this.dy = -this.dy;
            this.boundCnt++;
        } else if (this.y < 0) {
            this.y = 0;
            this.dy = -this.dy;
            this.boundCnt++;
        }

        // 規定回数バウンドしたらキャラクタの終了フラグを立てる
        if (10 <= this.boundCnt) {
            this.isEnd = true;
        }

        // 描画する画像の調整
        if (MaruoRed.DRAW_FRAME <= this.frameCnt) {
            this.imgIndex++;
            this.frameCnt = 0;
            if (MaruoRed.IMAGE_NAME.length <= this.imgIndex) {
                this.imgIndex = 0;
            }
        }
        this.frameCnt++;
    }

    draw() {
        front.drawImage(
            state.cm.characterImageMap.get(MaruoRed.IMAGE_NAME[this.imgIndex])
            , this.x
            , this.y
        );
    }

    leftClick() {
        this.isEnd = true;
    }
}