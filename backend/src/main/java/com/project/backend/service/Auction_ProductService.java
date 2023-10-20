package com.project.backend.service;

import com.project.backend.Entity.Product;

import java.util.List;
import java.util.Optional;

public interface Auction_ProductService {
    public void createProduct(Product product);
    public Optional<Product> readProduct(Integer id);
    public Product updateProduct(Product prod);
    public void deleteProduct(int id);

    public List<Product> readAllProduct();

//    public double getHighestBid();
}
