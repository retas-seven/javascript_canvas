/**
 * ステートの基底クラス
 */
class StateBase {
    /**
     * 初期化
     */
    constructor() {
        this.cm = new CharacterManager();
        this._isChangeStateEnd = false;
    }

    changeState(stateName) {
        if (!this._isChangeStateEnd) {
            isSystemBlack = true;
            systemAlpha = 0;
            nextStateName = stateName;
            this._isChangeStateEnd = true;
        }
    }
}