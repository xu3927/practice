import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import {
    Card,
    Button,
    Divider,
    Table,
    Popover,
    Modal,
    PageHeader
} from 'antd';


/**
 *  前端分页
 * @param {Number} pageNo 从1开始
 * @param {Number} pageSize
 * @param {Array} list 原数据
 * @return {object} 分页及数据
 */
const pageFilter = (pageNo = 1, pageSize = 10, list = []) => {
    let res = [], total = list.length, start = (pageNo - 1) * pageSize, end = start + pageSize > total ? total : start + pageSize;
    for (let i = start; i < end; i++) {
        res.push(list[i])
    }
    return {
        data: res,
        page: {
            pageNo,
            pageSize,
            total
        }
    }
}



@connect(({ task }) => ({
    task
}), ({ task: { queryJobList, reStartJob, deleteJob } }) => ({ queryJobList, reStartJob, deleteJob }))

class TaskList extends PureComponent {
    state = {
        modalVisible: false,
        updateModalVisible: false,
        selectedRows: [],
        formValues: {},
        stepFormValues: {},
        dataSource: [],
        currentTableCellBubble: '',
        pageNo: 1,
        pageSize: 10,
        total: 0
    };
    columns = [
        {
            title: '任务 ID',
            dataIndex: 'jobid',
            fixed: 'left',
            width: 170
        },
        {
            title: '状态',
            dataIndex: 'state',
            width: 60,
            render: val => {
                return val
            }
        },
        {
            title: 'TDW表',
            dataIndex: 'tablename_tdw',
        },
        {
            title: '本地表',
            dataIndex: 'tablename_local',
        },
        {
            title: '用户',
            dataIndex: 'users',
        },

        {
            title: '信息',
            dataIndex: 'info',
            width: 200,
            render: text => <div style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden' }}>{text}</div>
        },
        {
            title: '操作',
            fixed: 'right',
            width: 230,
            render: (text, record) => (
                <Fragment>
                    <a href="javascript:;">查看结果</a>
                    <Divider type="vertical" />
                    <div onClick={this.reStartJob(record.jobid)} title="重跑" type="link"></div>
                    <Divider type="vertical" />
                    <Popover
                        content={
                            <div>
                                <Button onClick={this.deleteItem(record.jobid)} type="primary" style={{ marginRight: '10px' }}>确定</Button>
                                <Button onClick={this.hidePopover}>取消</Button>
                            </div>
                        }
                        title="是否确认删除任务?"
                        visible={this.state.currentTableCellBubble == record.jobid}
                        trigger="hover">
                        <div onClick={(e) => {
                            this.setState({ currentTableCellBubble: record.jobid })
                        }} title="删除" type="link"></div>
                    </Popover>
                </Fragment>
            ),
        },
    ];

    componentDidMount() {
        this.fetchList()
    }

    reStartJob = (str_jobid) => {
        return () => {
            const { reStartJob } = this.props
            reStartJob({
                payload: str_jobid,
                callback: () => {
                    this.fetchList()
                }
            })
        }
    }

    fetchList = () => {
        let projectId = 24
        this.hidePopover()
        this.props.queryJobList(projectId)
    }

    deleteItem = (jobid) => {
        return () => {
            const { deleteJob } = this.props;
            deleteJob({
                payload: jobid,
                callback: () => {
                    this.fetchList()
                    this.hidePopover()
                }
            })
        }
    }
    hidePopover = () => {
        this.setState({ currentTableCellBubble: '' })
    }
    handleModalVisible = (visible) => {
        this.setState({ modalVisible: visible })
    }
    handleModalOnOk = () => {

    }
    pageChange = (pageNo, pageSize) => {
        this.setState({ pageNo, pageSize })
    }
    render() {
        const {
            task: { jobList, listLoading },
        } = this.props;
        let listData = pageFilter(this.state.pageNo, this.state.pageSize, jobList)

        return (
            <div>
                <PageHeader
                    title="示例"
                />
                <Card bordered={true}>
                    <div className="tableList">
                        <div>
                            <Button type="primary" style={{ marginRight: '20px' }} onClick={() => this.handleModalVisible(true)}>
                                新建任务
                            </Button>
                            <Button type="primary" onClick={this.fetchList}>
                                刷新列表
                            </Button>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <Table
                                style={{ width: '100%' }}
                                bordered={true}
                                loading={listLoading}
                                rowKey="jobid"
                                dataSource={listData.data}
                                scroll={{ x: true }}
                                pagination={{
                                    total: listData.page.total,
                                    pageSize: this.state.pageSize,
                                    current: this.state.pageNo,
                                    onChange: this.pageChange
                                }}
                                columns={this.columns}></Table>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}


export default TaskList;
