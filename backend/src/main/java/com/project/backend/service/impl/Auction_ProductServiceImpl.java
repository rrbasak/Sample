package com.project.backend.service.impl;

import com.project.backend.Entity.Images;
import com.project.backend.Entity.Product;
import com.project.backend.Repository.ImageRepo;
import com.project.backend.Repository.ProductRepository;
import com.project.backend.service.Auction_ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Auction_ProductServiceImpl implements Auction_ProductService {
    @Autowired
    private ProductRepository prepo;
    @Autowired
    private ImageRepo imgpo;
    /**
     * @return
     */
    @Override
    public void createProduct(Product product) {
        prepo.save(product);
    }

    /**
     * @return
     */
    @Override
    public Optional<Product> readProduct(Integer id) {
        return prepo.findById(id);
    }

    /**
     * @return
     */
    @Override
    public Product updateProduct(Product prod) {
        return prepo.save(prod);
    }

    /**
     *
     */
    @Override
    public void deleteProduct(int id) {
    	Product data=prepo.findById(id).get();
        prepo.delete(data);
    }

    /**
     * @return
     */
    @Override
    public List<Product> readAllProduct() {
        return prepo.findAll();
    }

}
