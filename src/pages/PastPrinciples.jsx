import Table from 'react-bootstrap/Table';

const PastPrinciples = () => {

    return (
        <>

            <a href="/about"> Go Back </a>

            <br /><br />
            <h2 className='line'> Past Principals </h2>

            <br /><br />

            <Table striped bordered hover size="sm" className='table'>
                <thead>
                    <tr>
                        
                        <th> Sr no. </th>
                        <th> Name of Principals </th>
                        <th> Tenure </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td> Mr. R. K. Kanabarkar </td>
                        <td> 1964-1971 </td>
                        
                    </tr>
                    <tr>
                        <td>2</td>
                        <td> Mr. B. A. Babar </td>
                        <td> 1971-1974 </td>
                        
                    </tr>
                    <tr>
                        <td>3</td>
                        <td> Dr. D. N. Solanki </td>
                        <td> 1974-1975 </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td> Dr. R. M. Chitnis </td>
                        <td> 1975-1979 </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td> Dr. A. P. Rane </td>
                        <td> 1979-1982 </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td> Drs. V. H. Patil </td>
                        <td> 1982-1987 </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td> Dr. D. A. Patil </td>
                        <td> 1987-2002 </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td> Dr. A. N. Jagtap </td>
                        <td> 2002-2008 </td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td> Dr. H. B. Patil </td>
                        <td> 2008-2017 </td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td> Dr. S. Y. Hongekar </td>
                        <td> 2017-2020 </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default PastPrinciples;