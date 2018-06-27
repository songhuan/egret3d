
namespace paper {
    /**
     * @internal
     */
    export const _executeInEditModeComponents: any[] = [];
    /**
     * 标记脚本组件是否在编辑模式也拥有生命周期。
     */
    export function executeInEditMode<T extends Behaviour>(target: { new(): T }) {
        _executeInEditModeComponents.push(target);
    }

    const _triggerAndCollisionHandler: (keyof Behaviour)[] = ["onTriggerEnter", "onTriggerStay", "onTriggerStay", "onTriggerExit", "onCollisionEnter", "onCollisionStay", "onCollisionExit"];
    /**
     * 脚本组件。
     * 生命周期的顺序。
     * - onAwake();
     * - System._onCreateComponent();
     * - onReset();
     * - onEnable();
     * - onStart();
     * - onFixedUpdate();
     * - onUpdate();
     * - onLateUpdate();
     * - onDisable();
     * - System._onDestroyComponent();
     * - onDestroy();
     */
    export class Behaviour extends BaseComponent {
        /**
         * @internal
         */
        @paper.serializedField
        public _isReseted: boolean = false;
        /**
         * @internal
         */
        public _isStarted: boolean = false;
        /**
         * @internal
         */
        public _isTriggerEnabled: boolean = false;
        /**
         * @internal
         */
        public _isCollisionEnabled: boolean = false;

        public initialize(): void {
            super.initialize();

            if (!paper.Application.isEditor || _executeInEditModeComponents.indexOf(this.constructor) >= 0) {
                this.onAwake();
            }
            // Initialize trigger and collision values.
            const classPrototype = this.constructor.prototype;
            this._isTriggerEnabled =
                classPrototype.hasOwnProperty(_triggerAndCollisionHandler[0]) ||
                classPrototype.hasOwnProperty(_triggerAndCollisionHandler[1]) ||
                classPrototype.hasOwnProperty(_triggerAndCollisionHandler[2]);
            this._isCollisionEnabled =
                classPrototype.hasOwnProperty(_triggerAndCollisionHandler[3]) ||
                classPrototype.hasOwnProperty(_triggerAndCollisionHandler[4]) ||
                classPrototype.hasOwnProperty(_triggerAndCollisionHandler[5]);
        }

        public uninitialize(): void {
            if (!paper.Application.isEditor || _executeInEditModeComponents.indexOf(this.constructor) >= 0) {
                this.onDestroy(); // TODO onDestroy 如果不是 enabled 就不派发
            }

            super.uninitialize();
        }

        /**
         * 当一个脚本实例被载入时Awake被调用，要先于Start。
         */
        public onAwake(): void {

        }

        /**
         * 
         */
        public onReset(): void {

        }

        /**
         * 物体启用时被调用
         */
        public onEnable() {

        }

        /**
         * Start仅在物体实例化完成后，Update函数第一次被调用前调用。
         */
        public onStart() {

        }

        /**
         * 这个函数会在每个固定的物理时间片被调用一次.这是放置游戏基本物理行为代码的地方。
         * （暂未实现）
         */
        public onFixedUpdate() {

        }

        /**
         * 
         */
        public onTriggerEnter(collisionObject: any) {

        }

        /**
         * 
         */
        public onTriggerStay(collisionObject: any) {

        }

        /**
         * 
         */
        public onTriggerExit(collisionObject: any) {

        }

        /**
         * 
         */
        public onCollisionEnter(collisionObject: any) {

        }

        /**
         * 
         */
        public onCollisionStay(collisionObject: any) {

        }

        /**
         * 
         */
        public onCollisionExit(collisionObject: any) {

        }

        /**
         * 当Behaviour启用时,其Update在每一帧被调用
         */
        public onUpdate(delta: number) {

        }


        public onLateUpdate(delta: number) {

        }

        /**
         * 物体被禁用时调用
         */
        public onDisable() {

        }

        /**
         * 物体被删除时调用
         */
        public onDestroy() {

        }

        /**
         * @deprecated
         */
        public onCollide(collider: any) {

        }
    }
}