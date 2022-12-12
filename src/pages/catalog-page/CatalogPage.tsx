import React from 'react';

interface ICatalogItem{
    id: number,
    name: string,
    title: string
}

interface ICatalogs extends Array<ICatalogItem>{};

const CatalogPage = (props:any) => {
    return (
        <div>
            {/*{catalogItems.map((item:ICatalogItem)=><div>{item.name}</div>)}*/}
            CatalogPages
        </div>
    );
};

export default CatalogPage;