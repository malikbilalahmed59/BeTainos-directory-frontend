import { useMyCompanies } from '@/app/hooks/useAPIs'
import React from 'react'
import { Table, Pagination } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;
const MyCampnies = () => {
    const { data: defaultData, isLoading } = useMyCompanies()
    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);

    const handleChangeLimit = (dataKey: number) => {
        setPage(1);
        setLimit(dataKey);
    };

    const data = (defaultData?.companie || []).filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });
    console.log(data)
    return (
        <>
            <div className='profile-box generictab-box'>
                <Table height={420} data={data} loading={isLoading}

                >
                    <Column align="center">
                        <HeaderCell>Id</HeaderCell>
                        <Cell dataKey="id" />
                    </Column>

                    <Column width={300} >
                        <HeaderCell>Name</HeaderCell>
                        <Cell dataKey="Name" />
                    </Column>

                    <Column width={200} >
                        <HeaderCell>FounderName</HeaderCell>
                        <Cell dataKey="FounderName" />
                    </Column>

                    <Column width={200}  >
                        <HeaderCell>Phone
                        </HeaderCell>
                        <Cell dataKey="Phone" />
                    </Column>
                    <Column width={300} resizable >
                        <HeaderCell>PostelAddress</HeaderCell>
                        <Cell dataKey="PostelAddress" />
                    </Column>
                    <Column width={200}>
                        <HeaderCell>ApplicationStatus</HeaderCell>
                        <Cell dataKey="ApplicationStatus" />
                    </Column>
                </Table>
                <div style={{ padding: 20 }}>
                    <Pagination
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        maxButtons={5}
                        size="xs"
                        layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                        total={(defaultData?.companie || []).length}
                        limitOptions={[10, 30, 50]}
                        limit={limit}
                        activePage={page}
                        onChangePage={setPage}
                        onChangeLimit={handleChangeLimit}
                    />
                </div>
            </div>
        </>
    )
}

export default MyCampnies