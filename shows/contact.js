function(doc, req) {
    var head =  '<h1>' + doc.name + '</h1>';
    
    // <a href="mailto:dave@example.org">dave@example.org</a>
    var body = '<hr/><p><i>email: </i><a href="mailto:' + doc._id +'">' + doc._id +  '</a></p>';
    
    // phone, fax, notes etc
    var tail = '';
    
    if (doc.phone) {
        tail = tail + '<p><i>Phone: </i>' + doc.phone + '</p>';
    }
    
    if (doc.fax) {
        tail = tail + '<p><i>Fax: </i>' + doc.fax + '</p>';
    }
    
    if (doc.notes) {
        tail = tail + '<p><i>Notes: </i>' + doc.notes + '</p>';
    }
    
    return head + body + tail + '<hr/>';
}
