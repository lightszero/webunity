using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


class NotExport : Attribute
{
    public NotExport()
    {

    }
    public NotExport(params string[] paramss)
    {

    }
}

