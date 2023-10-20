package com.project.backend.Repository;

import com.project.backend.Entity.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface BidRepo extends JpaRepository<Bid, Integer> {
    List<Bid> findByAuctionItemId(Integer auctionItemId);
}
