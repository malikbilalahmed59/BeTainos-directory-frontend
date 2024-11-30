import { useMyCompanies } from '@/app/hooks/useAPIs'
import React from 'react'
import { Table, Pagination, Tag } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;
const MyProfessionals = () => {
    const { data: defaultData, isLoading } = useMyCompanies()
    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);

    const handleChangeLimit = (dataKey: number) => {
        setPage(1);
        setLimit(dataKey);
    };

    const data = (defaultData?.professional || []).filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });
    console.log(data)
    return (
        <>
            <div className='profile-box generictab-box'>
                <Table height={420} data={data.reverse()} loading={isLoading}

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
                        <HeaderCell>ServicesOffered
                        </HeaderCell>
                        <Cell dataKey="ServicesOffered" />
                    </Column>
                    <Column width={200} >
                        <HeaderCell>officeHours
                        </HeaderCell>
                        <Cell dataKey="officeHours" />
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
                        <Cell>
                            {rowData =>
                                <Tag color={rowData.ApplicationStatus == 'Verified' ? 'green' : 'cyan'}  >{rowData.ApplicationStatus}</Tag>
                            }
                        </Cell>
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

export default MyProfessionals