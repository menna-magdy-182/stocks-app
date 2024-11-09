package com.stocksapp

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import androidx.appcompat.app.AppCompatActivity

class SplashActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Set the splash screen layout
        setContentView(R.layout.splash_screen)

        // Initialize the app and make sure React Native is ready before transitioning
        initializeApp()
    }

    private fun initializeApp() {
        // Use a Handler to ensure we are delaying the splash screen removal
        Handler().postDelayed({
            // After a delay (or once React Native is initialized), start the MainActivity
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
            finish()  
        }, 2000) 
    }
}
