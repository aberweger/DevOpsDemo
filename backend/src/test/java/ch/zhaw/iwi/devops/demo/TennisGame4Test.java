package ch.zhaw.iwi.devops.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class TennisGame4Test {

    private TennisGame4 game;

    @BeforeEach
    void setUp() {
        game = new TennisGame4("Player 1", "Player 2");
    }

    @Test
    void testGetScore() {
        //Test case for Love-All
        assertEquals("Love-All",game.getScore()); 
    }

    @Test
    void testIsDeuce() {

    }

    @Test
    void testReceiverHasAdvantage() 
    {
    }


    @Test
    void testReceiverHasWon() {

    }

    @Test
    void testServerHasAdvantage() {

    }

    @Test
    void testServerHasWon() {

    }

    @Test
    void testWonPoint() {

    }
}
