using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace tt
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            CodeDomProvider ccp = CodeDomProvider.CreateProvider("CSharp");
            CompilerParameters options = new CompilerParameters();
            options.GenerateInMemory = false;//别在内存生成，就会生成dll;
            //options.ReferencedAssemblies 引用其他的dll；
            var t= ccp.CompileAssemblyFromSource(options, "class ABC{}");
           // t.PathToAssembly;//dll 会被生成在这里
        }
    }
}
