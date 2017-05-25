using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

    namespace WindowsFormsApplication1
            {
                public partial class ElectroPet2012 : Form
                    {
                        int Health = 10; // declaring variables 
                        int Fun = 10; // int variables
                        int Hunger = 10;//asigning values to variables
                        string name = "Tim"; // default name
                        int Second = 1;
                        int Minute = 0;
                        int Hour = 0;
                        int Second2 = 1;
                        int Minute2 = 0;
                        int Hour2 = 0;
         
        
                        public ElectroPet2012()
                            {
                                 InitializeComponent(); //loads program 
                            } 
                    
                            //-------------- Main Form--------------//
                    private void Form1_Load(object sender, EventArgs e) // loads form
                            {
                            }
                    
                    private void lblMainTitle_Click(object sender, EventArgs e) // main program title label
                        {
                            lblMainTitle.Text = "Electro Pet 2012!"; // label text
                        }

                //------------------------Main Menu-----------------------------\\

                        private void pnlMainMenu_Paint(object sender, PaintEventArgs e) // Main Menu Panel
                            {
                                pnlMainMenu.BackColor = Color.Blue; // set panel colour blue
                            } 

                        private void lblMainMenu_Click(object sender, EventArgs e) // Main Menu Label Title 
                            {
                                lblMainMenu.Text = "Main Menu";
                            } 

                       private void btnNameRename_Click(object sender, EventArgs e) // comfirm name change button
                            {
                                name = txtName.Text; // changes pets name  
                                MessageBox.Show(" Your pets New Name is: " + name); // confirm message for name change
                            }
                      
                       private void txtName_TextChanged(object sender, EventArgs e) //change name text box 
                            {
                                this.Text = "Change name here";
                            }

                        private void btnPlayFight_Click(object sender, EventArgs e) // play fight button
                            {
                                    //stat effects
                                 Health = Health - 1;  
                                 Fun = Fun + 4; 
                                 Hunger = Hunger - 2; 
                                    //refresh state panels 
                                 pnlHealth.Refresh(); 
                                 pnlHunger.Refresh(); 
                                 pnlFun.Refresh(); 

                                 MessageBox.Show("You play fought with your pet "); // confirm user action
                           }

                        private void btnPlayFetch_Click(object sender, EventArgs e) // play fetch button
                            {
                                  Health = Health + 1;
                                  Fun = Fun + 2;
                                  Hunger = Hunger - 1;

                                  pnlHealth.Refresh();
                                  pnlHunger.Refresh();
                                  pnlFun.Refresh();

                                  MessageBox.Show("You played fetch with your pet");
                            }
                      
                         private void btnTreat_Click(object sender, EventArgs e) // treat pet button 
                            {
                                   Fun = Fun + 1;
                                   Hunger = Hunger + 1;

                                   pnlHealth.Refresh();
                                   pnlHunger.Refresh();
                                   pnlFun.Refresh();

                                   MessageBox.Show("You treated you pet");
                            }

                         private void btnFeed_Click(object sender, EventArgs e) // feed pet button
                            {
                                   Health = Health + 1;
                                   Hunger = Hunger + 4;

                                   pnlHealth.Refresh();
                                   pnlHunger.Refresh();
                                   pnlFun.Refresh();
                                    
                                   MessageBox.Show("You fed your pet");
                            }

                        private void btnHeal_Click(object sender, EventArgs e) //heal pet button
                            {
                                    Health = Health + 4;
                                    Fun = Fun - 1;
                                    Hunger = Hunger + 1;

                                    pnlHealth.Refresh();
                                    pnlHunger.Refresh();
                                    pnlFun.Refresh();

                                    MessageBox.Show("You healed your pet");
                            }

                        private void btnTimeCheck_Click(object sender, EventArgs e) // Time played Button
                            {
                                   MessageBox.Show("You have played for : " + Hour + " Hour(s) " + Minute + " Minute(s) " + Second + " Second(s) "); // show time
                            }
                        private void PlayTimeCheck_Tick(object sender, EventArgs e) // PlayTimeCheck timer 
                            {

                                if (Second >= 0)
                                    {
                                        ++Second; // add second
                                    }
                                if (Second == 60)
                                    {
                                        ++Minute; // add minute
                                        Second = Second - 60; // - 60 from second
                                    }
                                if (Minute == 60)
                                    {
                                        ++Hour; // hour
                                        Minute = Minute - 60; // -60 from minute
                                    }
                             }

                        private void btnRestart_Click(object sender, EventArgs e) // restart button
                            {
                                    MessageBox.Show("You are restarting the Program");
                                    Application.Restart(); // restarts program
                            }
                            
                          private void btnQuit_Click(object sender, EventArgs e) // quit button event handler  
                            {
            
                                    MessageBox.Show( "Pets Final Stats" + "\n" +  // message box // Final Pet Stats
                            
                                    "Pets Name:" + name + "\n" +
                                
                                    "Health Levels:" +Health+ "\n" +
                            
                                    "Hunger Levels:" +Hunger+ "\n"+
                            
                                    "Fun Levels:" +Fun , "\n");
                                
                                    MessageBox.Show("Goodbye! Please play again soon! :) "); // Goodbye message
                            
                                    Application.Exit(); // close program
                            }

                    //-------------End of Main Menu----------////

                //-------------------Pet States Monitor-------------------------\\
                   
                    
                        private void pnlPetMonitor_Paint(object sender, PaintEventArgs e) // pet states monitor panel
                            {
                                pnlPetMonitor.BackColor = Color.Blue;
                            }
                    
                        private void lblPetStatesMonitor_Click(object sender, EventArgs e) // pet states monitor title label
                            {
                                this.Text = "Pet States Monitor";
                            }
                    
                        private void lblHealth_Click(object sender, EventArgs e) // health label
                            {
                                lblHealth.Text = "Health"; //label text  
                            }   
                    
                        private void pnlHealth_Paint(object sender, PaintEventArgs e) // health state bar
                            {

                               if (Health <= 1) // if else statement
                                 {
                                       pnlHealth.BackColor = Color.Red; // set colour to red
                                 }

                               else if (Health >= 2 && Health <= 4)
                                 {
                                      pnlHealth.BackColor = Color.Orange; // set colour to orange 
                                 }

                               else if (Health >= 5 && Health <= 7)
                                 {
                                      pnlHealth.BackColor = Color.Yellow; // set colour to yellow
                                 }

                              else if (Health >= 8)
                                {
                                      pnlHealth.BackColor = Color.Green; // set colour to green
                                }
                             }

                        private void lblHunger_Click(object sender, EventArgs e) //hunger label
                             {
                                   lblHunger.Text = "Hunger";
                             }
                    
                        private void pnlHunger_Paint(object sender, PaintEventArgs e) //hunger panel
                            {
                                if (Hunger <= 1)
                                    {
                                       pnlHunger.BackColor = Color.Red;
                                    }

                                else if (Hunger >= 2 && Hunger <= 4)
                                    {
                                       pnlHunger.BackColor = Color.Orange;
                                    }

                                else if (Hunger >= 5 && Hunger <= 7)
                                    {
                                       pnlHunger.BackColor = Color.Yellow;
                                    }

                                else if (Hunger >= 8 && Hunger <= 10)
                                    {
                                       pnlHunger.BackColor = Color.Green;
                                    }
                              }

                        private void lblFun_Click(object sender, EventArgs e) // fun label
                              {
                                    lblFun.Text = "Fun";
                              }

                        private void pnlFun_Paint(object sender, PaintEventArgs e) // fun panel
                              {

                                if (Fun <= 1)
                                   {
                                        pnlFun.BackColor = Color.Red;
                                   }

                               else if (Fun >= 2 && Fun <= 4)
                                   {
                                        pnlFun.BackColor = Color.Orange;
                                   }

                               else if (Fun >= 5 && Fun <= 7)
                                   {
                                       pnlFun.BackColor = Color.Yellow;
                                   }

                               else if (Fun >= 8 && Fun <= 10)
                                   {
                                       pnlFun.BackColor = Color.Green;
                                   }
                                }

                        private void btnStats_Click(object sender, EventArgs e) // view pet stats button 
                                {
                                    MessageBox.Show("Pets Current Stats" + "\n" +

                                                    "Pets Name:" + name + "\n" +

                                                    "Health Levels:" + Health + "\n" +

                                                    "Hunger Levels:" + Hunger + "\n" +

                                                    "Fun Levels:" + Fun, "\n");

                                            if (Health >= 5 && Fun >= 5 && Hunger >= 5) 
                                                 MessageBox.Show("Your Pet is fine");
                                            
                                            if (Health <= 4 || Fun <= 4 || Hunger <= 4)
                                                MessageBox.Show("Your pet needs attention");
                                 }
 
                           //------------End of Pet Moniter-------// 


                        //--------Background play time clock------\\
                       private void lblTimeShow_Click(object sender, EventArgs e) // Time Played 
                                 {
                                       this.Text = "Play Time";
                                 }

                       private void txtTime_TextChanged(object sender, EventArgs e) // time played text box
                                 {
                                    if (Second2 >= 0) // if second equal are greater then 0
                                        {
                                            ++Second2; // add a second to the count 
                                        }

                                    if (Second2 == 60) // if second is 60 or greater than 60 if an area occurs
                                        {
                                            ++Minute2; // add 1 to minute
                                            Second2 = Second2 - 60; // then take the 60 from seconds // this is a manual way of reseting the seconds
                                        }

                                    if (Minute2 == 60) //if minutes is 60 or greater
                                        {
                                            ++Hour2; // add 1 hour
                                            Minute2 = Minute2 - 60; // take away the minutes
                                        }
                                 }

                       private void PlayTimeBackGround_Tick(object sender, EventArgs e) // background time played clock timer
                                {
                                     PlayTimeBackGround.Enabled = false; // stop timer
                                     txtTime.Text = "" + Hour2 + " Hour(s) " + Minute2 + "Minute(s) " + Second2 + "Second(s) ";
                                     PlayTimeBackGround.Enabled = true; // start timer
                                }
                            //----- End of Background Play time clock------\\
                    
                            //------------------------WatchTimers---------------------\\\\

                      private void HealthWatch_Tick(object sender, EventArgs e) // healthwatch timer
                                {
                            
                                  if (Health >= 1) // if health 1 or more take one away 
                                        {
                                            Health = Health - 1;
                                            HealthWatch.Enabled = false; //stop timer
                                            HealthWatch.Enabled = true; // start timer

                                            pnlHealth.Refresh();
                                            pnlHunger.Refresh();
                                            pnlFun.Refresh();

                                    // this timer takes 1 away from health every 60 seconds
                                }
                    }

                     private void HungerWatch_Tick(object sender, EventArgs e) // HungerWatch timer 
                                {

                                    if (Hunger >= 1) // if statement

                                        Hunger = Hunger - 1;
                                        HungerWatch.Enabled = false; // stop hunger watch timer 
                                        HungerWatch.Enabled = true; // start hunger watch timer

                                        pnlHealth.Refresh();
                                        pnlHunger.Refresh();
                                        pnlFun.Refresh();

                                        //this timer takes 1 away from  hunger every 60 seconds 
                    }

                    private void BoredWatch_Tick(object sender, EventArgs e) // boredwatch timer
                                {

                                    if (Fun >= 1)

                                    Fun = Fun - 1;
                                    BoredWatch.Enabled = false; // stop boredwatch timer
                                    BoredWatch.Enabled = true; // start boredwatch tomer

                                    pnlHealth.Refresh();
                                    pnlHunger.Refresh();
                                    pnlFun.Refresh();
                                    // this timer takes 1 away from fun every 60 seconds
                                }

                         //------------------MainTimer--------------\\

                    private void MainTimer_Tick(object sender, EventArgs e) //main timer
                            {
                                    if (Health <= 0)
                                        {
                                            MainTimer.Enabled = false;
                                            MessageBox.Show("You Pet Has Died from illness!");

                                            MessageBox.Show("Pets Final Stats" + "\n" +

                                            "Pets Name:" + name + "\n" +

                                            "Health Levels:" + Health + "\n" +

                                            "Hunger Levels:" + Hunger + "\n" +

                                            "Fun Levels:" + Fun, "\n");

                                            MessageBox.Show("Better Luck Next Time, Goodbye!");

                                            Application.Exit();
                                        // timer closes application if health equals 0
                                        }

                                    else if (Hunger <= 0)
                                        {
                                            MainTimer.Enabled = false;
                                            MessageBox.Show("You Pet Has Died of Hunger!");

                                            MessageBox.Show("Pets Final Stats" + "\n" +

                                                        "Pets Name:" + name + "\n" +

                                                        "Health Levels:" + Health + "\n" +

                                                        "Hunger Levels:" + Hunger + "\n" +

                                                        "Fun Levels:" + Fun, "\n");

                                            MessageBox.Show("Better Luck Next Time, Goodbye!");

                                            Application.Exit();
                                        //timer closes application if hunger equals 0
                                        }

                                    else if (Fun <= 0)
                                        {
                                            MainTimer.Enabled = false;
                                            MessageBox.Show("You Pet Has Died of Boredom!");

                                            MessageBox.Show("Pets Final Stats" + "\n" +

                                                           "Pets Name:" + name + "\n" +

                                                           "Health Levels:" + Health + "\n" +

                                                           "Hunger Levels:" + Hunger + "\n" +

                                                           "Fun Levels:" + Fun, "\n");

                                            MessageBox.Show("Better Luck Next Time, Goodbye!");

                                            Application.Exit();
                                        // timer closes application if fun equals 0 
                                        }


                                   else if (Health > 10)
                                      {
                                            Health = 10; // set health back to 10
                                            // MessageBox.Show("You Pet is Maxed out on Health!");
                                      }

                                   else if (Hunger > 10)
                                      {
                                            Hunger = 10; // set hunger back to 10
                                            //MessageBox.Show("You have pet has eaten enough for now");
                                      }

                                  else if (Fun > 10)
                                      {
                                            Fun = 10; // set fun back to 10 
                                            // MessageBox.Show("You Pet is having Fun to the Max! ");
                                      }

                                        pnlHealth.Refresh();
                                        pnlHunger.Refresh();
                                        pnlFun.Refresh();
                                        //---------- End of Main Timer------\\
                             }
                 }
             }// end program 


                       
