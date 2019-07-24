// queryJobList, reStartJob, deleteJob 
import { notification } from 'antd'

const queryJobList = (params) => {
    return Promise.resolve({
        state: 'success',
        data: []
    })
}

const reStartJob = (params) => {
    return Promise.resolve({
        state: 'success',
        data: []
    })
}

const deleteJob = (params) => {
    return Promise.resolve({
        state: 'success'
    })
}

const models = {
    state: {
        jobList: [],
        allDefaultAttrInfo: [],
        listLoading: false,
        selectedDataPackage: null, // 当前选择的包
        customAttrs: [], // 自定义属性
        allDefaultAttrInfoLoading: false,
        detail: {
            currentJobId: '',
            currentJobDetail: {}
        },
        result: {
            tableList: [],
            resultTable: {
                columns: [], // 表格
                dataSource: [],
                rowKey: 'yAxisValue',
                loading: true,

                tablename: ''
            },
            currentConfig: {},
            fetchTalbesLoading: true,
            currentJobInfo: {},
            allConfig: {},
            exportLoading: false
        }
    },
    reducers: {
        updateList(state, payload) {
            return {
                ...state,
                jobList: payload
            }
        },
        changeLoading(state, payload) {
            return {
                ...state,
                listLoading: payload
            }
        },
        changeAllDefaultAttrInfoLoading(state, payload) {
            return {
                ...state,
                allDefaultAttrInfoLoading: payload
            }
        },
        updateAllDefaultAttrInfo(state, payload) {
            return {
                ...state,
                allDefaultAttrInfo: payload
            }
        },
        queryDetail(state, jobid) {
            return {
                ...state,
                detail: {
                    ...state.detail,
                    currentJobId: jobid,
                    currentJobDetail: state.jobList[state.jobList.findIndex(item => item.jobid == jobid)]
                }
            }
        },

        updateResultTable(state, { columns, dataSource, loading, tablename }) {
            return {
                ...state,
                result: {
                    ...state.result,
                    resultTable: {
                        ...state.result.resultTable,
                        columns: [...columns],
                        dataSource: [...dataSource],
                        loading,
                        tablename
                    }
                }
            }
        },

        updateResultTableLists(state, { tableList = [], tableGroups = {} }) {
            return {
                ...state,
                result: {
                    ...state.result,
                    tableList,
                    tableGroups,
                    tableListLoading: false
                }
            }
        },
        updateResultCurrentJobInfo(state, currentJobInfo) {
            return {
                ...state,
                result: {
                    ...state.result,
                    currentJobInfo
                }
            }
        },
        updateResultAllConfig(state, allConfig) {
            return {
                ...state,
                result: {
                    ...state.result,
                    allConfig: { ...allConfig }
                }
            }
        },
        updateCurrentConfig(state, currentConfig) {
            return {
                ...state,
                result: {
                    ...state.result,
                    currentConfig: { ...currentConfig }
                }
            }
        },
        updateExportLoading(state, loading) {
            return {
                ...state,
                result: {
                    ...state.result,
                    exportLoading: loading
                }
            }
        }

    },
    effects: dispatch => ({
        async queryJobList(payload) {
            this.changeLoading(true)
            const response = await queryJobList(payload)
            this.updateList(Array.isArray(response.data) ? response.data : [])
            this.changeLoading(false)
        },
        async deleteJob({ payload, callback }) {
            const response = await deleteJob(payload);
            if (response.state == 'success') {
                notification.success({
                    message: '删除成功',
                    duration: 2
                })
                callback()
            }
        },
        async reStartJob({ payload, callback }) {
            const response = await reStartJob(payload);
            if (response.state == 'success') {
                notification.success({
                    message: '操作成功',
                    duration: 2
                })
                callback()
            }
        },

    })
}

export default models

