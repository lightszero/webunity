using Mono.Cecil;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Windows.Forms;

namespace recallunity
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            LoadAssm();
        }
        class TypeInfo
        {
            public TypeInfo(TypeDefinition def)
            {
                this.def = def;
                var t = def;
                type = "==unknown==";
                if (t.IsInterface)
                    type = "<Interface>";
                if (t.IsClass)
                {
                    type = "<class>";
                    if (t.BaseType.Name == "Delegate" || t.BaseType.Name == "MulticastDelegate")
                    {
                        type = "<delegate>";
                    }
                }
                if (t.IsValueType)
                    type = "<struct>";
                if (t.IsEnum)
                    type = "<enum>";
            }
            public TypeDefinition def;
            public string type;
            public override string ToString()
            {
                string basetype = "<nobase>";
                if (def.BaseType != null)
                    basetype = def.BaseType.Name;
                return type + "||" + def.FullName +":"+basetype;
            }
        }
        Dictionary<string, TypeInfo> infos = new Dictionary<string, TypeInfo>();
        void LoadAssm()
        {

            var module = Mono.Cecil.ModuleDefinition.ReadModule("UnityEngine.dll");

            foreach (TypeDefinition t in module.GetTypes())
            {
                if (t.IsPublic == false) continue;
                //if (t.Namespace.Contains("UnityEngine") == false) continue;
                TypeInfo _t = new TypeInfo(t);
                infos[t.FullName] = _t;
                listBox1.Items.Add(_t.ToString());
            }
        }
    }
}

