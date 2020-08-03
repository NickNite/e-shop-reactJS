import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import styles from './productInfo.module.css'


const ProductInfo = ({ product, addProduct }) => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <div>
                    <h3>Dining table&ensp;"{product.title}"</h3>
                </div>
                <div>
                    <Button onClick={addProduct.bind(this, product)} size='tiny' positive>Add to cart</Button>
                    <strong>Price:&ensp; {product.price}$</strong>
                </div>

            </div>

            <div className={styles.img}>
                <img src={product.image} />
            </div>
            <React.Fragment>
                <Table definition>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell width={2}>Producer</Table.Cell>
                            <Table.Cell>{product.producer || '-'}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Height</Table.Cell>
                            <Table.Cell>{product.size.height || '-'}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Long</Table.Cell>
                            <Table.Cell>{product.size.long || '-'}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Width</Table.Cell>
                            <Table.Cell>{product.size.width || '-'}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Color</Table.Cell>
                            <Table.Cell>{product.color || '-'}</Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell>Descriptoin</Table.Cell>
                            <Table.Cell>{product.description || '-'}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </React.Fragment>
        </div>
    )
}
export default ProductInfo;