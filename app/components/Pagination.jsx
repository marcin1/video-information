import React from 'react';

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }
    
    changePage(page,event) {
        event.preventDefault();
        event.stopPropagation();
        if (page < 0 || page >= this.props.totalPages){
            return;
        }
        if (this.props.onPageChange){
            this.props.onPageChange(page);
        }
    }
    
    prepareRows(){
        let minPage = this.props.page - 3;
        minPage = minPage < 0 ? 0 : minPage;
        
        let maxPage = this.props.page + 3;
        maxPage = maxPage >= this.props.totalPages ? this.props.totalPages - 1 : maxPage;
        
        let rows = [];
        for (var i = minPage; i <= maxPage;i++)
        {
            if (i == minPage)
            {
                rows.push(
                    <li key={i} className={i == this.props.page ? 'disabled' : ''}>
                        <a  href="#"  onClick={this.changePage.bind(this,this.props.page - 1)} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                );
            }
            rows.push(
                <li key={i + 1} className={i == this.props.page ? 'active' : ''}>
                    <a  href="#" onClick={this.changePage.bind(this,i)}>
                        {i + 1}
                    </a>
                </li>
            );
            if (i == maxPage)
            {
                rows.push(
                    <li key={i + 2} className={i == this.props.page ? 'disabled' : ''}>
                        <a href="#"  onClick={this.changePage.bind(this,this.props.page + 1)} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                );
            }
        } 
        return rows;
    }
    
    render() {        
        return (
            <nav className="text-center">
            <ul className="pagination">
                 {this.prepareRows()}
            </ul>
            </nav>
        );
    }
}

Pagination.propTypes = { 
    page: React.PropTypes.number.isRequired,
    totalPages: React.PropTypes.number.isRequired,
    onPageChange: React.PropTypes.func
};
Pagination.defaultProps = { page: 0, totalPages: 0 };