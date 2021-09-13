
import { IThreadSendData,ThreadSystemTask } from "../../../vox/engine/thread/ThreadSystemTask";
declare class ThreadSystemModule {

    initializeThread(threadsTotal: number, codeStr: string): void;
    sendDataToWorkerAt(i: number, sendData: IThreadSendData): void;
    createThreadSystemTask(classId: number): ThreadSystemTask;
    initTaskByURL(url: string, classId: number): void;
    initTaskByCodeStr(codeString: string, classId: number, moudleClassName: string): void;
    /**
     * 将数据对象加入多线程任务处理队列
     * @param thrData 可以进入多线程任务系统处理的数据对象
     */
    addTaskData(thrData: IThreadSendData): void;
    /**
     * @returns 返回是否在队列中还有待处理的数据
     */
    hasTaskData(): boolean;
    run(): void;
}

export { ThreadSystemModule };