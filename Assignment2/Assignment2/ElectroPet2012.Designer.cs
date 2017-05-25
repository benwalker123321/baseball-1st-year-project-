namespace WindowsFormsApplication1
{
    partial class ElectroPet2012
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.btnStats = new System.Windows.Forms.Button();
            this.btnPlayFetch = new System.Windows.Forms.Button();
            this.btnPlayFight = new System.Windows.Forms.Button();
            this.btnFeed = new System.Windows.Forms.Button();
            this.btnTreat = new System.Windows.Forms.Button();
            this.btnHeal = new System.Windows.Forms.Button();
            this.btnNameRename = new System.Windows.Forms.Button();
            this.btnRestart = new System.Windows.Forms.Button();
            this.btnQuit = new System.Windows.Forms.Button();
            this.lblMainTitle = new System.Windows.Forms.Label();
            this.HealthWatch = new System.Windows.Forms.Timer(this.components);
            this.txtName = new System.Windows.Forms.TextBox();
            this.MainTimer = new System.Windows.Forms.Timer(this.components);
            this.BoredWatch = new System.Windows.Forms.Timer(this.components);
            this.HungerWatch = new System.Windows.Forms.Timer(this.components);
            this.lblMainMenu = new System.Windows.Forms.Label();
            this.pnlPetMonitor = new System.Windows.Forms.Panel();
            this.lblPetStatesMonitor = new System.Windows.Forms.Label();
            this.lblFun = new System.Windows.Forms.Label();
            this.lblHunger = new System.Windows.Forms.Label();
            this.lblHealth = new System.Windows.Forms.Label();
            this.pnlFun = new System.Windows.Forms.Panel();
            this.pnlHunger = new System.Windows.Forms.Panel();
            this.pnlHealth = new System.Windows.Forms.Panel();
            this.btnTimeCheck = new System.Windows.Forms.Button();
            this.PlayTimeCheck = new System.Windows.Forms.Timer(this.components);
            this.lblTime = new System.Windows.Forms.Label();
            this.txtTime = new System.Windows.Forms.TextBox();
            this.PlayTimeBackGround = new System.Windows.Forms.Timer(this.components);
            this.lblPlayTime = new System.Windows.Forms.Label();
            this.pnlMainMenu = new System.Windows.Forms.Panel();
            this.pnlPetMonitor.SuspendLayout();
            this.pnlMainMenu.SuspendLayout();
            this.SuspendLayout();
            // 
            // btnStats
            // 
            this.btnStats.Location = new System.Drawing.Point(91, 272);
            this.btnStats.Name = "btnStats";
            this.btnStats.Size = new System.Drawing.Size(104, 23);
            this.btnStats.TabIndex = 0;
            this.btnStats.Text = "View Pets Stats";
            this.btnStats.UseVisualStyleBackColor = true;
            this.btnStats.Click += new System.EventHandler(this.btnStats_Click);
            // 
            // btnPlayFetch
            // 
            this.btnPlayFetch.Location = new System.Drawing.Point(58, 113);
            this.btnPlayFetch.Name = "btnPlayFetch";
            this.btnPlayFetch.Size = new System.Drawing.Size(146, 23);
            this.btnPlayFetch.TabIndex = 1;
            this.btnPlayFetch.Text = "Play Fetch with Pet";
            this.btnPlayFetch.UseVisualStyleBackColor = true;
            this.btnPlayFetch.Click += new System.EventHandler(this.btnPlayFetch_Click);
            // 
            // btnPlayFight
            // 
            this.btnPlayFight.Location = new System.Drawing.Point(58, 84);
            this.btnPlayFight.Name = "btnPlayFight";
            this.btnPlayFight.Size = new System.Drawing.Size(146, 23);
            this.btnPlayFight.TabIndex = 2;
            this.btnPlayFight.Text = "Play Fight with Pet";
            this.btnPlayFight.UseVisualStyleBackColor = true;
            this.btnPlayFight.Click += new System.EventHandler(this.btnPlayFight_Click);
            // 
            // btnFeed
            // 
            this.btnFeed.Location = new System.Drawing.Point(92, 171);
            this.btnFeed.Name = "btnFeed";
            this.btnFeed.Size = new System.Drawing.Size(75, 23);
            this.btnFeed.TabIndex = 3;
            this.btnFeed.Text = "Feed Pet ";
            this.btnFeed.UseVisualStyleBackColor = true;
            this.btnFeed.Click += new System.EventHandler(this.btnFeed_Click);
            // 
            // btnTreat
            // 
            this.btnTreat.Location = new System.Drawing.Point(73, 142);
            this.btnTreat.Name = "btnTreat";
            this.btnTreat.Size = new System.Drawing.Size(119, 23);
            this.btnTreat.TabIndex = 4;
            this.btnTreat.Text = "Give Pet a Treat";
            this.btnTreat.UseVisualStyleBackColor = true;
            this.btnTreat.Click += new System.EventHandler(this.btnTreat_Click);
            // 
            // btnHeal
            // 
            this.btnHeal.Location = new System.Drawing.Point(92, 200);
            this.btnHeal.Name = "btnHeal";
            this.btnHeal.Size = new System.Drawing.Size(75, 23);
            this.btnHeal.TabIndex = 5;
            this.btnHeal.Text = "Heal Pet";
            this.btnHeal.UseVisualStyleBackColor = true;
            this.btnHeal.Click += new System.EventHandler(this.btnHeal_Click);
            // 
            // btnNameRename
            // 
            this.btnNameRename.Location = new System.Drawing.Point(3, 54);
            this.btnNameRename.Name = "btnNameRename";
            this.btnNameRename.Size = new System.Drawing.Size(125, 23);
            this.btnNameRename.TabIndex = 6;
            this.btnNameRename.Text = "Confirm Name Change";
            this.btnNameRename.UseVisualStyleBackColor = true;
            this.btnNameRename.Click += new System.EventHandler(this.btnNameRename_Click);
            // 
            // btnRestart
            // 
            this.btnRestart.Location = new System.Drawing.Point(50, 258);
            this.btnRestart.Name = "btnRestart";
            this.btnRestart.Size = new System.Drawing.Size(75, 23);
            this.btnRestart.TabIndex = 7;
            this.btnRestart.Text = "Restart";
            this.btnRestart.UseVisualStyleBackColor = true;
            this.btnRestart.Click += new System.EventHandler(this.btnRestart_Click);
            // 
            // btnQuit
            // 
            this.btnQuit.Location = new System.Drawing.Point(131, 258);
            this.btnQuit.Name = "btnQuit";
            this.btnQuit.Size = new System.Drawing.Size(75, 23);
            this.btnQuit.TabIndex = 8;
            this.btnQuit.Text = "Quit";
            this.btnQuit.UseVisualStyleBackColor = true;
            this.btnQuit.Click += new System.EventHandler(this.btnQuit_Click);
            // 
            // lblMainTitle
            // 
            this.lblMainTitle.AutoSize = true;
            this.lblMainTitle.Font = new System.Drawing.Font("Microsoft Sans Serif", 26.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblMainTitle.ForeColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.lblMainTitle.Location = new System.Drawing.Point(163, 9);
            this.lblMainTitle.Name = "lblMainTitle";
            this.lblMainTitle.Size = new System.Drawing.Size(299, 39);
            this.lblMainTitle.TabIndex = 10;
            this.lblMainTitle.Text = "Electro Pet 2012!";
            this.lblMainTitle.Click += new System.EventHandler(this.lblMainTitle_Click);
            // 
            // HealthWatch
            // 
            this.HealthWatch.Enabled = true;
            this.HealthWatch.Interval = 61000;
            this.HealthWatch.Tick += new System.EventHandler(this.HealthWatch_Tick);
            // 
            // txtName
            // 
            this.txtName.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            this.txtName.Location = new System.Drawing.Point(131, 57);
            this.txtName.Name = "txtName";
            this.txtName.Size = new System.Drawing.Size(129, 20);
            this.txtName.TabIndex = 21;
            this.txtName.Text = "Change name here";
            this.txtName.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            this.txtName.TextChanged += new System.EventHandler(this.txtName_TextChanged);
            // 
            // MainTimer
            // 
            this.MainTimer.Enabled = true;
            this.MainTimer.Interval = 1000;
            this.MainTimer.Tick += new System.EventHandler(this.MainTimer_Tick);
            // 
            // BoredWatch
            // 
            this.BoredWatch.Enabled = true;
            this.BoredWatch.Interval = 61000;
            this.BoredWatch.Tick += new System.EventHandler(this.BoredWatch_Tick);
            // 
            // HungerWatch
            // 
            this.HungerWatch.Enabled = true;
            this.HungerWatch.Interval = 61000;
            this.HungerWatch.Tick += new System.EventHandler(this.HungerWatch_Tick);
            // 
            // lblMainMenu
            // 
            this.lblMainMenu.AutoSize = true;
            this.lblMainMenu.Font = new System.Drawing.Font("Microsoft Sans Serif", 21.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblMainMenu.ForeColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.lblMainMenu.Location = new System.Drawing.Point(52, 9);
            this.lblMainMenu.Name = "lblMainMenu";
            this.lblMainMenu.Size = new System.Drawing.Size(158, 33);
            this.lblMainMenu.TabIndex = 25;
            this.lblMainMenu.Text = "Main Menu";
            this.lblMainMenu.Click += new System.EventHandler(this.lblMainMenu_Click);
            // 
            // pnlPetMonitor
            // 
            this.pnlPetMonitor.BackColor = System.Drawing.Color.Blue;
            this.pnlPetMonitor.Controls.Add(this.lblPetStatesMonitor);
            this.pnlPetMonitor.Controls.Add(this.lblFun);
            this.pnlPetMonitor.Controls.Add(this.lblHunger);
            this.pnlPetMonitor.Controls.Add(this.lblHealth);
            this.pnlPetMonitor.Controls.Add(this.btnStats);
            this.pnlPetMonitor.Controls.Add(this.pnlFun);
            this.pnlPetMonitor.Controls.Add(this.pnlHunger);
            this.pnlPetMonitor.Controls.Add(this.pnlHealth);
            this.pnlPetMonitor.Location = new System.Drawing.Point(306, 51);
            this.pnlPetMonitor.Name = "pnlPetMonitor";
            this.pnlPetMonitor.Size = new System.Drawing.Size(295, 298);
            this.pnlPetMonitor.TabIndex = 24;
            this.pnlPetMonitor.Paint += new System.Windows.Forms.PaintEventHandler(this.pnlPetMonitor_Paint);
            // 
            // lblPetStatesMonitor
            // 
            this.lblPetStatesMonitor.AutoSize = true;
            this.lblPetStatesMonitor.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblPetStatesMonitor.Location = new System.Drawing.Point(38, 11);
            this.lblPetStatesMonitor.Name = "lblPetStatesMonitor";
            this.lblPetStatesMonitor.Size = new System.Drawing.Size(237, 31);
            this.lblPetStatesMonitor.TabIndex = 25;
            this.lblPetStatesMonitor.Text = "Pet States Monitor";
            this.lblPetStatesMonitor.Click += new System.EventHandler(this.lblPetStatesMonitor_Click);
            // 
            // lblFun
            // 
            this.lblFun.AutoSize = true;
            this.lblFun.Location = new System.Drawing.Point(16, 219);
            this.lblFun.Name = "lblFun";
            this.lblFun.Size = new System.Drawing.Size(25, 13);
            this.lblFun.TabIndex = 28;
            this.lblFun.Text = "Fun";
            this.lblFun.Click += new System.EventHandler(this.lblFun_Click);
            // 
            // lblHunger
            // 
            this.lblHunger.AutoSize = true;
            this.lblHunger.Location = new System.Drawing.Point(12, 148);
            this.lblHunger.Name = "lblHunger";
            this.lblHunger.Size = new System.Drawing.Size(42, 13);
            this.lblHunger.TabIndex = 27;
            this.lblHunger.Text = "Hunger";
            this.lblHunger.Click += new System.EventHandler(this.lblHunger_Click);
            // 
            // lblHealth
            // 
            this.lblHealth.AutoSize = true;
            this.lblHealth.Location = new System.Drawing.Point(16, 65);
            this.lblHealth.Name = "lblHealth";
            this.lblHealth.Size = new System.Drawing.Size(38, 13);
            this.lblHealth.TabIndex = 26;
            this.lblHealth.Text = "Health";
            this.lblHealth.Click += new System.EventHandler(this.lblHealth_Click);
            // 
            // pnlFun
            // 
            this.pnlFun.BackColor = System.Drawing.SystemColors.Info;
            this.pnlFun.Location = new System.Drawing.Point(70, 219);
            this.pnlFun.Name = "pnlFun";
            this.pnlFun.Size = new System.Drawing.Size(190, 34);
            this.pnlFun.TabIndex = 30;
            this.pnlFun.Paint += new System.Windows.Forms.PaintEventHandler(this.pnlFun_Paint);
            // 
            // pnlHunger
            // 
            this.pnlHunger.BackColor = System.Drawing.SystemColors.Info;
            this.pnlHunger.Location = new System.Drawing.Point(70, 143);
            this.pnlHunger.Name = "pnlHunger";
            this.pnlHunger.Size = new System.Drawing.Size(190, 34);
            this.pnlHunger.TabIndex = 30;
            this.pnlHunger.Paint += new System.Windows.Forms.PaintEventHandler(this.pnlHunger_Paint);
            // 
            // pnlHealth
            // 
            this.pnlHealth.BackColor = System.Drawing.Color.Snow;
            this.pnlHealth.ForeColor = System.Drawing.SystemColors.MenuHighlight;
            this.pnlHealth.Location = new System.Drawing.Point(70, 65);
            this.pnlHealth.Name = "pnlHealth";
            this.pnlHealth.Size = new System.Drawing.Size(190, 34);
            this.pnlHealth.TabIndex = 29;
            this.pnlHealth.Paint += new System.Windows.Forms.PaintEventHandler(this.pnlHealth_Paint);
            // 
            // btnTimeCheck
            // 
            this.btnTimeCheck.Location = new System.Drawing.Point(58, 229);
            this.btnTimeCheck.Name = "btnTimeCheck";
            this.btnTimeCheck.Size = new System.Drawing.Size(137, 23);
            this.btnTimeCheck.TabIndex = 28;
            this.btnTimeCheck.Text = "Check Time Played";
            this.btnTimeCheck.UseVisualStyleBackColor = true;
            this.btnTimeCheck.Click += new System.EventHandler(this.btnTimeCheck_Click);
            // 
            // PlayTimeCheck
            // 
            this.PlayTimeCheck.Enabled = true;
            this.PlayTimeCheck.Interval = 1000;
            this.PlayTimeCheck.Tick += new System.EventHandler(this.PlayTimeCheck_Tick);
            // 
            // lblTime
            // 
            this.lblTime.AutoSize = true;
            this.lblTime.Location = new System.Drawing.Point(490, 362);
            this.lblTime.Name = "lblTime";
            this.lblTime.Size = new System.Drawing.Size(0, 13);
            this.lblTime.TabIndex = 26;
            // 
            // txtTime
            // 
            this.txtTime.Enabled = false;
            this.txtTime.Location = new System.Drawing.Point(397, 354);
            this.txtTime.Name = "txtTime";
            this.txtTime.Size = new System.Drawing.Size(204, 20);
            this.txtTime.TabIndex = 27;
            this.txtTime.TextChanged += new System.EventHandler(this.txtTime_TextChanged);
            // 
            // PlayTimeBackGround
            // 
            this.PlayTimeBackGround.Enabled = true;
            this.PlayTimeBackGround.Interval = 1000;
            this.PlayTimeBackGround.Tick += new System.EventHandler(this.PlayTimeBackGround_Tick);
            // 
            // lblPlayTime
            // 
            this.lblPlayTime.AutoSize = true;
            this.lblPlayTime.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblPlayTime.ForeColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.lblPlayTime.Location = new System.Drawing.Point(302, 352);
            this.lblPlayTime.Name = "lblPlayTime";
            this.lblPlayTime.Size = new System.Drawing.Size(76, 20);
            this.lblPlayTime.TabIndex = 28;
            this.lblPlayTime.Text = "Play Time";
            // 
            // pnlMainMenu
            // 
            this.pnlMainMenu.BackColor = System.Drawing.Color.Blue;
            this.pnlMainMenu.Controls.Add(this.btnTimeCheck);
            this.pnlMainMenu.Controls.Add(this.btnNameRename);
            this.pnlMainMenu.Controls.Add(this.btnQuit);
            this.pnlMainMenu.Controls.Add(this.txtName);
            this.pnlMainMenu.Controls.Add(this.lblMainMenu);
            this.pnlMainMenu.Controls.Add(this.btnPlayFight);
            this.pnlMainMenu.Controls.Add(this.btnFeed);
            this.pnlMainMenu.Controls.Add(this.btnTreat);
            this.pnlMainMenu.Controls.Add(this.btnPlayFetch);
            this.pnlMainMenu.Controls.Add(this.btnHeal);
            this.pnlMainMenu.Controls.Add(this.btnRestart);
            this.pnlMainMenu.Location = new System.Drawing.Point(12, 51);
            this.pnlMainMenu.Name = "pnlMainMenu";
            this.pnlMainMenu.Size = new System.Drawing.Size(265, 298);
            this.pnlMainMenu.TabIndex = 23;
            this.pnlMainMenu.Paint += new System.Windows.Forms.PaintEventHandler(this.pnlMainMenu_Paint);
            // 
            // ElectroPet2012
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.ClientSize = new System.Drawing.Size(613, 386);
            this.Controls.Add(this.lblPlayTime);
            this.Controls.Add(this.txtTime);
            this.Controls.Add(this.lblTime);
            this.Controls.Add(this.lblMainTitle);
            this.Controls.Add(this.pnlPetMonitor);
            this.Controls.Add(this.pnlMainMenu);
            this.Name = "ElectroPet2012";
            this.Text = "Electro Pet 2012";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.pnlPetMonitor.ResumeLayout(false);
            this.pnlPetMonitor.PerformLayout();
            this.pnlMainMenu.ResumeLayout(false);
            this.pnlMainMenu.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnStats;
        private System.Windows.Forms.Button btnPlayFetch;
        private System.Windows.Forms.Button btnPlayFight;
        private System.Windows.Forms.Button btnFeed;
        private System.Windows.Forms.Button btnTreat;
        private System.Windows.Forms.Button btnHeal;
        private System.Windows.Forms.Button btnNameRename;
        private System.Windows.Forms.Button btnRestart;
        private System.Windows.Forms.Button btnQuit;
        private System.Windows.Forms.Label lblMainTitle;
        private System.Windows.Forms.Timer HealthWatch;
        private System.Windows.Forms.TextBox txtName;
        private System.Windows.Forms.Timer MainTimer;
        private System.Windows.Forms.Timer BoredWatch;
        private System.Windows.Forms.Timer HungerWatch;
        private System.Windows.Forms.Label lblMainMenu;
        private System.Windows.Forms.Panel pnlPetMonitor;
        private System.Windows.Forms.Label lblPetStatesMonitor;
        private System.Windows.Forms.Label lblHealth;
        private System.Windows.Forms.Label lblHunger;
        private System.Windows.Forms.Label lblFun;
        private System.Windows.Forms.Panel pnlHunger;
        private System.Windows.Forms.Panel pnlFun;
        private System.Windows.Forms.Panel pnlHealth;
        private System.Windows.Forms.Timer PlayTimeCheck;
        private System.Windows.Forms.Label lblTime;
        private System.Windows.Forms.Button btnTimeCheck;
        private System.Windows.Forms.TextBox txtTime;
        private System.Windows.Forms.Timer PlayTimeBackGround;
        private System.Windows.Forms.Label lblPlayTime;
        private System.Windows.Forms.Panel pnlMainMenu;
    }
}

