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
    void testGetScore() 
    {
        //Test case for 0-0 Love-All
        assertEquals("Love-All",game.getScore()); 

        //Test case for 15-15 Fifteen-All
        game.wonPoint("Player 1");
        game.wonPoint("Player 2");
        assertEquals("Fifteen-All",game.getScore());

       // Spielstand zurücksetzen 
        setUp();
        // Test case for 30-30 "Thirty-All"
        for (int i = 0; i < 2; i++) {

        game.wonPoint("Player 1");
        game.wonPoint("Player 2");
        }
        assertEquals("Thirty-All", game.getScore());

        // Spielstand zurücksetzen   
        setUp();
        // Test case for 40-30 "Forty-Thirty"
        for (int i = 0; i < 3; i++) {
            game.wonPoint("Player 1");
        }
        for (int i = 0; i < 2; i++) {
            game.wonPoint("Player 2");
        }
        assertEquals("Forty-Thirty", game.getScore());
        
        // Spielstand zurücksetzen
        setUp();
        // Test case for "Win for Player 1"
        for (int i = 0; i < 4; i++) {
            game.wonPoint("Player 1");
        }
        for (int i = 0; i < 2; i++) {
            game.wonPoint("Player 2");
        }
        assertEquals("Win for Player 1", game.getScore());

        setUp();
        // Test case for "Win for Player 2"
        for (int i = 0; i < 2; i++) {
            game.wonPoint("Player 1");
        }
        for (int i = 0; i < 4; i++) {
            game.wonPoint("Player 2");
        }
        assertEquals("Win for Player 2", game.getScore());


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
